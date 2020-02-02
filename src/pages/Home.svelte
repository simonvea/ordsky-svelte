<script>
  export let navigate = () => console.log("yo");
</script>

<style>
  .welcome {
    width: calc(100% - 40px);
    max-width: 600px;
    margin-bottom: 4rem;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .welcome__title {
    font-size: 1.5rem;
  }

  .welcome__undertitle {
    font-size: 1.3rem;
    padding: 5px;
  }

  .welcome__text {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<section class="welcome">
  <article class="welcome__text">
    <p>
      Ordsky.no er et verktøy for å lage en enkel ordsky fra tekst. Ordskyen gir
      større vekt til ord som fremkommer oftere i teksten.
    </p>
    <p>
      Ordskyen er perfekt å bruke til presentasjoner laget i for eksempel word
      eller powerpoint.
    </p>
    <p>
      Ordsky.no gir deg også muligheten til å lese gjennom nettsider og
      visualisere ordene som er på nettsidene.
    </p>
  </article>
</section>
<section class="flex-container">
  <button class="button" on:click={navigate}>Kom i gang</button>
</section>
