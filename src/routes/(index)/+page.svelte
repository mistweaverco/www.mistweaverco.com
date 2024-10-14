<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
	import GitHubIcon from '$lib/icons/fontawesome/github.svelte';
</script>

<HeadComponent
	data={{
		title: 'mistweaverco',
		description:
			"Making the world a better place, one line of code at a time. We're a small team of developers who love to create and share our work with the world."
	}}
/>

<div class="container">
	<div class="inner">
		<header>mistweaverco</header>
		<p>
			We love ❤️ to make the world 🌎 a better place by giving you all the tools 📦 you need, but
			always for free 🤞 and driven by the community 🌈.
		</p>
		<div class="get-in-touch">
			<a
				href="https://github.com/mistweaverco"
				title="Check out our Github profile"
				class="github-icon"
			>
				<GitHubIcon />
			</a>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: auto;
		min-height: 100vh;
		text-align: center;
		position: relative;
		font-size: 1.5rem;
		color: #fff;
		background-color: #1b1b1b;
	}

	header,
	p {
		font-family: 'Indie Flower', cursive;
	}

	header {
		font-size: 2rem;
	}

	p {
		font-size: 1.2rem;
	}

	.inner {
		text-align: center;
		width: 85%;
		margin: auto;
		min-height: calc(100vh - 4rem);
		font-family: monospace;
		max-width: 530px;
	}

	.get-in-touch a {
		color: #fff;
		text-decoration: none;
		border: 0 none;
	}

	.github-icon :global(svg):hover {
		fill: #ff6480;
	}

	.github-icon :global(svg) {
		transition: fill 0.5s;
		display: inline-block;
		cursor: pointer;
		height: 32px;
		width: 32px;
	}
</style>
