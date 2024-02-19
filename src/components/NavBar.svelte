<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { navigating } from "$app/stores";

  let open = false;

  function openNav() {
    open = !open;
  }

  $: if ($navigating) {
    open = false;
  }
</script>

<nav class="p-2 sm:hidden grid">
  <div class="grid-cols-2 grid items-center">
    <ul class="list-none flex flex-row gap-2 m-0 p-0">
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
    <ul class="list-none flex flex-row gap-2 m-0 p-0 justify-end">
      <li>
        <button on:click={openNav} class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
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
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
  {#if open}
    <div
      class="grid-cols-2 grid items-center"
      transition:slide={{
        delay: 0,
        duration: 300,
        easing: quintOut,
      }}
    >
      <ul class="list-none m-0 p-0">
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/kraith">Kraith</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>

<nav class="grid-cols-2 p-2 hidden sm:grid">
  <ul class="list-none flex flex-row gap-2 m-0 p-0">
    <li>
      <a href="/">Home</a>
    </li>
  </ul>
  <ul class="list-none flex flex-row gap-2 m-0 p-0 justify-end">
    <li>
      <a href="/gallery">Gallery</a>
    </li>
    <li>
      <a href="/kraith">Kraith</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  div {
    transition: all 0.5s ease-in-out;
  }
  nav {
    border-bottom-style: dashed;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.05);
  }
</style>
