import { addons } from '@storybook/addons';
import { EMIT_EVENT } from '../constants';
import uuid from 'uuid/v4';

export function logEvent(e) {
  const id = uuid();
  const formattedEvent = {
    id,
    data: {
      name: e.type,
      payload: e.detail
    }
  };

  const channel = addons.getChannel();
  channel.emit(EMIT_EVENT, formattedEvent)
}
