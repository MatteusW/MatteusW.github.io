<script>
  import NavBar from "../components/NavBar.svelte";
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "../global.scss";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <meta name="twitter:card" content="https://matteus.art/favicon.png" />
  <meta
    name="twitter:image:src"
    content="https://matteus.art/assets/favicon.png"
  />
  <meta property="og:image" content="https://matteus.art/assets/favicon.png" />
  <meta property="og:image:width" content="6000" />
  <meta property="og:image:height" content="3325" />
  <meta name="twitter:site" content="https://matteus.art/" />
</svelte:head>

<div class="h-screen w-screen flex flex-col bg-[#96ad8e] overflow-x-hidden">
  <NavBar />
  <main
    class="w-full pb-0 py-1 p-0 mx-a max-w-180 bg-white lg:max-w-250 flex flex-col justify-between h-full grid"
  >
    <div
      class="flex flex-col justify-between bg-white w-full mt-2xl gap-2 max-w-200 mx-a p-4"
    >
      <slot />
    </div>
    <Footer />
  </main>
</div>

<style>
  main {
    font-family: "Merriweather", serif;
  }
</style>
