<main class="w-full py-1 h-full"></main>

<style lang="scss">
  .gallery {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }

  .wide {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }
</style>
