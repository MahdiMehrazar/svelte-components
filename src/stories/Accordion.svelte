<script lang="ts">
	import { slide } from 'svelte/transition';
	/**
	 * Input data for the accordion
	 */
	export let data: any = [];
	/**
	 * Is toggled
	 */
	let isOpen: boolean[] = [];

	/**
	 * How large should the label be?
	 */
	export let labelSize = 'medium';

  /**
	 * How large should the content be?
	 */
	export let contentSize = 'medium';

	data.forEach(() => {
		isOpen.push(false);
	});
	const toggle = (i: any) => (isOpen[i] = !isOpen[i]);
</script>

{#each data as item, i}
	<button class={labelSize} on:click={() => toggle(i)} aria-expanded={isOpen[i]}
		><svg
			width="2em"
			height="2em"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
		>
		{item.label}
	</button>
	{#if isOpen[i]}
		<ul class={contentSize} transition:slide={{ duration: 300 }}>
			{@html item.entry}
		</ul>
	{/if}
{/each}

<style>
	button {
		border: none;
		background: none;
		display: flex;
    align-items: center;
		color: inherit;
		cursor: pointer;
		margin: 0;
		padding-bottom: 0.5em;
		padding-top: 0.5em;
	}

	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}

	.small {
		font-size: 12px;
	}
	.medium {
		font-size: 14px;
	}
	.large {
		font-size: 16px;
	}
</style>
