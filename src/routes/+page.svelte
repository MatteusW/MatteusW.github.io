<script lang="ts">
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Matteus Watson</title>
  <meta
    name="description"
    content="Hi I'm Matteus Watson. I'm an artist, this is my portfolio."
  />
</svelte:head>

<main
  class="w-full h-auto py-1 p-4 bg-white mx-a max-w-180 lg:max-w-250 flex flex-col justify-between"
>
  <div class="flex flex-col justify-between w-full my-2xl gap-8 max-w-200 mx-a">
    <h1 class="text-2xl sm:text-3xl font-900 text-center md:text-left mx-a">
      Matteus J.A Watson
    </h1>
    <div class="flex flex-col justify-between w-full gap-2">
      <figure class="h-auto flex flex-col">
        <img
          src="/assets/Social_anxiety.webp"
          alt="Social Anxiety"
          width="100%"
          height="auto"
          class="z-2 outline outline-1 outline-black/20 shadow-md h-full bg-body-900 fade-in"
        />
        <figcaption class="text-sm">
          Social Anxiety 2023 • Acrylic on Drywall • 247cm x 195cm
        </figcaption>
      </figure>
      <hr class="my-1" />
      <div class="flex flex-col gap-2 text-sm">
        <p>
          Consequatur vitae id excepturi temporibus et veniam voluptas. Nesciunt
          ut velit aut vitae. Molestias dicta alias quaerat laudantium enim
          similique sit blanditiis. Illo corrupti atque minima aspernatur
          praesentium. Eum doloremque assumenda perferendis. Et aut eius
          sapiente vero. Consectetur perferendis deserunt eveniet.
        </p>
        <p>
          Molestiae id aut sit nobis. Eos autem et maiores facilis assumenda.
          Nisi et et quo. Beatae omnis autem est exercitationem in illo. Non ab
          ut qui asperiores fugiat. Et qui omnis voluptas ea. Quo voluptatem
          facere perferendis quia. Delectus omnis soluta facere officiis
          molestias excepturi qui consequuntur. Ipsa quisquam repellendus aut
          sapiente.
        </p>
      </div>
    </div>
    <div class="flex">
      <a href="/kraith" class="flex items-center">
        <p class="text-lg">Visit Kraith</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-right"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </a>
    </div>
  </div>
  <Footer />
</main>

<style lang="scss">
  main {
    font-family: "Merriweather", serif;
  }
  h1 {
    font-weight: 600;
    text-decoration: underline;
  }
</style>
