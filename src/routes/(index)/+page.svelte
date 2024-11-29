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
		<div class="quotes quote">
			<blockquote>
				<p><strong>Individuals and interactions</strong> over processes and tools</p>
				<p><strong>Working software</strong> over comprehensive documentation</p>
				<p><strong>Customer collaboration</strong> over contract negotiation</p>
				<p><strong>Responding to change</strong> over following a plan</p>
			</blockquote>
			<cite>Agile Manifesto</cite>
		</div>
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
