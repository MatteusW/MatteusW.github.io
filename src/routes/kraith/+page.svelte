<script>
  import Footer from "../../components/Footer.svelte";
</script>

<main
  class="w-full h-auto py-1 p-4 bg-white mx-a max-w-180 lg:max-w-250 flex flex-col justify-between"
>
  <article class="flex flex-col w-full max-w-200 mx-a">
    <header class="pt-12 prose">
      <h1 class="text-2xl lg:text-4xl">Kraith & Pangkura</h1>
      <h4>Summary</h4>
    </header>
    <div
      class="max-w-none prose prose-a:text-pink-400 dark:prose-invert text-justify"
    >
      <p>Kraith and pagkura lorem ipsum bla bla bla</p>
      <figure>
        <img
          src="/assets/Social_anxiety.webp"
          alt="Social Anxiety"
          width="100%"
          height="100"
        />
        <figcaption>Social Anxiety image</figcaption>
      </figure>
      <p>Kraith and pagkura lorem ipsum bla bla bla</p>
    </div>
    <div class="w-full overflow-x-hidden">
      <p>
        I created a translator from this language to english that you can use
        <a href="/exhibits/kraith/translator">here</a>.
      </p>
      <p></p>
    </div>
  </article>
  <Footer />
</main>
