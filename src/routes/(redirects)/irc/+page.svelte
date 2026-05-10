<script>
	import { onMount } from 'svelte';
	import { redirectTo } from './../redirectTo';
	let url = '';
	onMount(() => {
		url = redirectTo('ircs://irc.libera.chat:6697?channels=#mistweaverco');
	});
</script>

<div>
	<p>Redirecting to <a href={url}>#mistweaverco on irc.libera.chat</a>...</p>
</div>
