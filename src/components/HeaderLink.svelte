<script>
	export let href;

	// let url = new URL(window.location.href);

	// const subpath = url.pathname.match(/[^\/]+/g);
</script>

<a {href} class={$$props.class}>
	<!-- class:active={href === url.pathname || href === "/" + subpath?.[1]} -->
	<slot />
</a>

<style>
	a {
		color: white;
		display: inline-block;
		text-decoration: none;
	}
	a.active {
		text-decoration: underline;
	}
</style>
