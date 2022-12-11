<script lang="ts">
	/**
	 * Checkbox contents
	 */
	export let label = '';

	/**
	 * Is toggled
	 */
	export let isToggled = false;
	/**
	 * How large should the checkbox be?
	 */
	export let size = 'medium';
</script>

<label class={['sveltio-toggle-label', `sveltio-toggle-label--${size}`].join(' ')}>
	<input type="checkbox" class={`checkbox--${size}`} bind:checked={isToggled} />
	<span class="label-text">{label}</span>
</label>

<style>
	.sveltio-toggle-label {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
		font-size: 12px;
	}

	.sveltio-toggle-label--small {
		font-size: 12px;
	}

	.sveltio-toggle-label--medium {
		font-size: 16px;
	}

	.sveltio-toggle-label--large {
		font-size: 24px;
	}

	.checkbox--small {
		width: 12px;
		height: 12px;
	}
	.checkbox--medium {
		width: 16px;
		height: 16px;
	}
	.checkbox--large {
		width: 24px;
		height: 24px;
	}

	.label-text {
		padding-top: 2px;
	}
</style>
