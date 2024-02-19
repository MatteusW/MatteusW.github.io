<script>
  import NavBar from "../components/NavBar.svelte";
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "../global.scss";
</script>

<svelte:head>
  <meta
    name="twitter:card"
    content="https://matteus.art/assets/Social_anxiety.webp"
  />
  <meta name="twitter:site" content="https://matteus.art/" />
  <link rel="icon" href="favicon.png" />
</svelte:head>

<div class="h-screen w-screen flex flex-col bg-[#96ad8e]">
  <NavBar />
  <div class="overflow-x-hidden h-full grid">
    <slot />
  </div>
</div>

<style>
</style>
