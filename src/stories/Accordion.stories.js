import Accordion from './Accordion.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Example/Accordion',
	component: Accordion,
	argTypes: {
		labelSize: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
    contentSize: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Accordion,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Data = Template.bind({});
Data.args = {
	data: [{ label: 'sample text 1', entry: 'this is a sample text' }]
};

export const Data2 = Template.bind({});
Data2.args = {
	data: [
		{ label: 'sample text 1', entry: 'this is a sample text' },
		{ label: 'sample text 2', entry: '<i>this is a sample text 2</i>' },
		{ label: 'sample text 3', entry: '<b>this is a sample text 3</b>' }
	]
};
