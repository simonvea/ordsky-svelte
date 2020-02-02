<script>
  import Home from "./pages/Home.svelte";
  import CreateCloud from "./pages/CreateCloud.svelte";
  export let title;
  let stage = 0;
</script>

<style>
  .header__link {
    color: inherit;
    text-decoration: none;
  }
</style>

<header class="header">
  <h1 class="header__title">
    <a href="/" class="header__link">{title}</a>
  </h1>
</header>
<main class="main-container">
  {#if stage === 0}
    <Home navigate={() => (stage = 1)} />
  {:else}
    <CreateCloud />
  {/if}
</main>
<footer class="footer" />
