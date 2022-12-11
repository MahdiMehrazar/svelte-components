import Checkbox from './Checkbox.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Checkbox,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Labeled = Template.bind({});
Labeled.args = {
  label: 'Check me',
};

export const Blank = Template.bind({});
Blank.args = {
  label: '',
};
