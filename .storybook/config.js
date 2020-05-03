import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src', true, /.(story|stories).tsx$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(withA11y);
  req.keys().forEach((filename) => req(filename));

  addParameters({
    docs: DocsPage,
  });
}

configure(loadStories, module);
