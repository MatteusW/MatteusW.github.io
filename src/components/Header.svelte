<script>
	import { SITE_TITLE } from "../consts";
	import { quintOut } from "svelte/easing";
	import { slide } from "svelte/transition";

	import HeaderLink from "./HeaderLink.svelte";

	let isOpen = false;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<header class="py-2 px-2.5">
	<nav class="md:flex hidden items-center justify-between">
		<a href="/">{SITE_TITLE}</a>
		<ul class="flex flex-row gap-4">
			<li>
				<HeaderLink href="/exhibits/latest">Latest Exhibit</HeaderLink>
			</li>
			<li>
				<HeaderLink href="/exhibits">Exhibits</HeaderLink>
			</li>
			<!-- <li>
				<HeaderLink href="/contact">Contact</HeaderLink>
			</li> -->
		</ul>
	</nav>
	<nav class="md:hidden flex flex-col justify-between px-1 py-0.25">
		<ul class="w-full">
			<li class="flex flex-row justify-between w-full">
				<a href="/">{SITE_TITLE}</a>
				<button id="nav-button" on:click={toggleNav}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6l16 0" />
						<path d="M4 12l16 0" />
						<path d="M4 18l16 0" />
					</svg>
				</button>
			</li>
		</ul>
		{#if isOpen}
			<ul
				transition:slide={{
					delay: 0,
					duration: 300,
					easing: quintOut,
				}}
			>
				<li>
					<HeaderLink href="/exhibits/latest">Latest Exhibit</HeaderLink>
				</li>
				<li>
					<HeaderLink href="/exhibits">Exhibits</HeaderLink>
				</li>
			</ul>
		{/if}
	</nav>
</header>

<style>
	a {
		color: white;
	}
	header {
		outline: 1px dashed #dcdfe1;
	}
</style>
