<script>
	import { onMount } from 'svelte';
	import HeadComponent from '$lib/HeadComponent.svelte';
	export let data;
	onMount(() => {
		console.log(data);
	});
</script>

<HeadComponent
	data={{
		title: 'mistweaverco - manifesto',
		description:
			'The libera manifesto:a silent perspective – one which most Internet users cannot see outright.'
	}}
/>

<div class="container">
	<div class="inner">
		<img class="logo" src="/mistweaverco-logo.svg" alt="mistweaverco logo" />
		<header>mistweaverco manifesto</header>
		<p>
			This manifesto was published to expose a silent perspective - one which most Internet users
			cannot see outright.
		</p>
		<p>
			These are not absolute truths, merely concepts to which many “freebie” providers adhere and
			are compiled from.
		</p>
		<p>
			The original manifesto can be found here:
			<a class="link" href="https://liberamanifesto.com/" target="_blank" rel="noopener noreferrer">
				liberamanifesto.com
			</a>
		</p>
		<div class="manifesto block">
			<ul>
				{#each data.quotes as item}
					<li>
						<!-- eslint-disable-next-line svelte/no-html-literal -->
						<p>{@html item}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
