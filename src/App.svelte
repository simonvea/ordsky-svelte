<script>
  import Home from "./pages/Home.svelte";
  import CreateCloud from "./pages/CreateCloud.svelte";
  export let title;
  let stage = 0;
</script>

<header class="header">
  <h1 class="header__title">{title}</h1>
</header>
<main class="main-container">
  {#if stage === 0}
    <Home navigate={() => (stage = 1)} />
  {:else}
    <CreateCloud />
  {/if}
</main>
<footer class="footer" />
