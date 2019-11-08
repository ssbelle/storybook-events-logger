# Custom Storybook Events Logger

Storybook Events Logger can be used to display event and custom event data payloads.

## Getting Started

Install:

```sh
npm i -D storybook-events-logger
```

Then add the Event Logger panel to Storybook by adding the following content to `.storybook/addons.js`

```js
import 'storybook-events-logger/dist/register';
```

Next, in your story import the `logEvent` function and use it to pass an event to the Storybook Events Logger panel.

```js
logEvent(event)
```
