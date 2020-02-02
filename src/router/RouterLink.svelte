<script>
  import { currentRoute } from "./router.js";
  export let page = { path: "/home", name: "Home" };
  function redirectTo(event) {
    // change current router path
    currentRoute.set(event.target.pathname);
    // push the path into web browser history API
    window.history.pushState(
      { path: page.path },
      "",
      window.location.origin + page.path
    );
  }
</script>

<style>
  a {
    text-transform: uppercase;
    text-decoration: underline;
    padding: 1rem;
  }
</style>

<button class="button" href={page.path} on:click|preventDefault={redirectTo}>
  {page.name}
</button>
