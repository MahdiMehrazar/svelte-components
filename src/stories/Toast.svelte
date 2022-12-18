<script lang="ts">
	/**
	 * Should toast type be success or error?
	 */
	export let type = 'success';

	/**
	 * What should the toast message be?
	 */
	export let message = 'medium';
</script>

<div class="absolute w-full z-10 top-0">
	<div class="w-full md:w-1/3 mx-auto">
		<div
			class="flex items-center border-l-6 py-2 px-3 shadow-md mb-2"
			class:bg-green-500={type === 'success'}
			class:border-green-700={type === 'success'}
			class:bg-red-500={type === 'error'}
			class:border-red-700={type === 'error'}
		>
			<div class="text-white max-w-xs">{message}</div>
		</div>
	</div>
</div>

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
