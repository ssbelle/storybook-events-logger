import React from 'react';
import { API } from '@storybook/api';
import { STORY_RENDERED } from '@storybook/core-events';
import { withTheme, Theme } from '@storybook/theming';
import Inspector from 'react-inspector';
import { Action, InspectorContainer, Wrapper, H3 } from './UI';
import { ADDON_ID, EMIT_EVENT } from '../constants';

const ThemedInspector = withTheme(({ theme, ...props }) => (
  <Inspector theme={theme.addonActionsTheme || 'chromeLight'} {...props} />
));

export class Panel extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          current: {},
          edit: {
              name: '',
              payload: ''
          },
          events: [],
          eventsToDisplay: []
      };
      this.api = props.api || {};

      this.storyChanged = this.storyChanged.bind(this);
      this.logger = this.logger.bind(this);
    }

    componentDidMount() {
      this.api.on(STORY_RENDERED, this.storyChanged);
      this.api.on(EMIT_EVENT, this.logger);
    }

    componentWillUnmount() {
      this.api.off(STORY_RENDERED, this.storyChanged);
      this.api.off(EMIT_EVENT, this.logger);
    }

    storyChanged(id) {
      const events = this.api.getParameters(id, ADDON_ID) || [];
      this.setState({ events, current: events[0] || {} });
    }

    logger = (e)  => {
      this.setState((prevState) => {
        const eventsToDisplay = [...prevState.eventsToDisplay];
        eventsToDisplay.push(e);
        return {eventsToDisplay};
      })
    }

    render() {
      const { active } = this.props;
      const result = this.state.eventsToDisplay.length ?
      <Wrapper>
      { this.state.eventsToDisplay.map((e, index) => (
        <Action key={index}>
          <h3>{e.data.name}</h3>
          <InspectorContainer>
            <ThemedInspector
              sortObjectKeys
              showNonenumerable={false}
              name='Payload'
              data={e.data.payload || e.data}
            />
          </InspectorContainer>
        </Action>
      ))}
      </Wrapper> : null

      return active ? result : null;
    }
}
