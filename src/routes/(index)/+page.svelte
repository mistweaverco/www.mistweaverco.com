<script>
	import HeadComponent from '$lib/HeadComponent.svelte';
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
		<img class="logo" src="/mistweaverco-logo.svg" alt="mistweaverco logo" />
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
			<a href="/irc" title="Join our IRC channel">
				<img src="/badge-irc.svg" alt="irc badge" />
			</a>
			<a href="/discord" title="Join our Discord community">
				<img src="/badge-discord.svg" alt="discord badge" />
			</a>
			<a href="https://github.com/mistweaverco" title="Check out our Github profile">
				<img src="/badge-github.svg" alt="github badge" />
			</a>
			<a href="/roadmap" title="Check out our Development Status">
				<img src="/badge-development-status.svg" alt="development status" />
			</a>
		</div>
	</div>
</div>
