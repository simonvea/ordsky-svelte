<script>
  import Home from "./pages/Home.svelte";
  export let title;
</script>

<header class="header">
  <h1 class="header__title">{title}</h1>
</header>
<main class="main-container">
  <Home />
</main>
<footer class="footer" />
