import styled from '@emotion/styled';
// import { styled } from '@storybook/theming';
// import { opacify } from 'polished';
import Inspector from 'react-inspector';
import { withTheme, Theme } from '@storybook/theming';

export const Action = styled.div({
  display: 'flex',
  padding: '5px',
  borderLeft: '5px solid transparent',
  borderBottom: '1px solid transparent',
  transition: 'all 0.1s',
  alignItems: 'flex-start',
});

export const Wrapper = styled.section`
  display: flex,
  flex-direction: column
`;

// export const ThemedInspector = withTheme(({ theme, ...props }) => (
//   <Inspector theme={theme.addonActionsTheme || 'chromeLight'} {...props} />
// ));


export const Counter = styled.div<{}>(({ theme }) => ({
  backgroundColor: rgba(255, 255, 255, 0.5),
  color: theme.color.inverseText,
  fontSize: theme.typography.size.s1,
  fontWeight: theme.typography.weight.bold,
  lineHeight: 1,
  padding: '1px 5px',
  borderRadius: '20px',
  margin: '2px 0px',
}));

export const InspectorContainer = styled.div({
  flex: 1,
  padding: '0 0 0 5px',
});

const colors = {
    primary: '#4ABE9D',
    secondary: '#1FA6FD',
    error: '#E66962',
    grey: '#ddd'
};

const spacing = 4;

export const Card = styled.div`
    flex: 1 0 0;
    max-width: 550px;
    margin: ${spacing * 3}px;
    padding: ${spacing * 3}px;
    border-radius: ${spacing}px;
    box-shadow: 0 5px 15px -10px black;
    &.secondary {
        background-color: ${colors.grey};
        box-shadow: none;
        border: 1px solid #ccc;
    }
    @media(max-width: 860px) {
        flex: 1 100%;
    }
`;

export const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: row wrap;
`;

export const Button = styled.button`
    flex: 1 0 0;
    margin: ${spacing * 3}px 0 0 ${spacing * 3}px;
    padding: ${spacing * 2}px ${spacing * 4}px;
    color: white;
    font-weight: bold;
    background-color: ${colors.primary};
    border: none;
    border-radius: ${spacing}px;
    transition: background-color 0.2s ease;
    border: 1px solid ${colors.primary};
    &.outline {
        color: ${colors.primary};
        background-color: transparent;
    }
    &.secondary {
        color: ${colors.secondary};
        background-color: transparent;
        border-color: ${colors.secondary};
        &.active {
            color: white;
            background-color: ${colors.secondary};
        }
    }
    &.error {
        background-color: ${colors.error};
    }
`;

const forms = `
    width: 100%;
    display: block;
    margin: ${spacing}px 0 ${spacing * 2}px;
    padding: ${spacing}px ${spacing + 2}px;
    background-color: transparent;
    border: 1px solid ${colors.grey};
    border-radius: ${spacing}px;
`;

export const Input = styled.input`
    ${forms}
`;

export const Textarea = styled.textarea`
    ${forms}
    resize: vertical;
`;

export const H3 = styled.h3`
    margin: ${spacing * 2}px 0;
    font-weight: bold;
`;
