<script>
  import NavBar from "../components/NavBar.svelte";
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "../global.scss";
  import Footer from "../components/Footer.svelte";
</script>

<div class="h-screen w-screen flex flex-col">
  <NavBar />
  <div class="overflow-x-hidden h-full">
    <slot />
  </div>
  <Footer />
</div>

<style>
</style>
