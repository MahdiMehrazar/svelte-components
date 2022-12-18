import Toast from './Toast.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Example/Toast',
	component: Toast,
	argTypes: {
		type: {
			control: { type: 'select', options: ['success', 'error'] }
		},
		message: {
			control: 'text'
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Toast,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Success = Template.bind({});
Success.args = {
	type: 'success',
	message: 'Success!'
};

export const Error = Template.bind({});
Error.args = {
	type: 'error',
	message: 'Error!'
};
