import Radio from './Radio.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Example/Radio',
	component: Radio,
	argTypes: {
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] }
		},
    flexDirection: {
			control: { type: 'select', options: ['column', 'row'] }
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Radio,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Data = Template.bind({});
Data.args = {
	options: [
		{ label: 'Option 1', value: '1' },
		{ label: 'Option 2', value: '2' }
	]
};

export const Data2 = Template.bind({});
Data2.args = {
	options: [
		{ label: 'Red', value: 'red' },
		{ label: 'Blue', value: 'blue' },
		{ label: 'Green', value: 'green' }
	]
};
