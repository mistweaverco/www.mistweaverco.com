<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const BASE_URL = 'https://github.com/orgs/mistweaverco/projects/5';
	let redirectUrl = BASE_URL;
	let repo = '';
	let title = 'Redirecting to roadmap overview';

	onMount(() => {
		if (browser) {
			const params = new URLSearchParams(window.location.search);
			const project = params.get('filter');

			if (!project) {
				document.title = title;
				window.location.href = redirectUrl;
				return;
			}

			const marker = '/';
			repo = project.includes(marker)
				? project.substring(project.lastIndexOf(marker) + 1)
				: project;

			const q = `repo%3Amistweaverco%2F${repo}`;
			redirectUrl = BASE_URL + '?filterQuery=' + q;

			document.title = `Redirecting to ${repo} roadmap`;
			window.location.href = redirectUrl;
		}
	});
</script>

<div>
	<p>Redirecting to <a href={redirectUrl}>{repo !== '' ? repo : ''} roadmap</a>...</p>
</div>

<style>
	:root {
		--color-background: #121212;
		--color-text: #ffffff;
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--color-background: #000000;
			--color-text: #ffffff;
		}
	}
	:global(html),
	:global(body) {
		font-size: 16px;
		font-family: system-ui, sans-serif;
		background-color: var(--color-background);
		color: var(--color-text);
		margin: 0;
		padding: 0;
	}
	div {
		text-align: center;
		margin: 20px auto;
	}
	a {
		color: #1e90ff;
		text-decoration: none;
	}
	p {
		font-family: system-ui, sans-serif;
		padding: 1rem;
	}
</style>
