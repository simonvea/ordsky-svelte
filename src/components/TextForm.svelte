<script>
  import countWords from "../utils/countWords.js";
  export let onSubmit;
  let text = "";
  let notification = "";
  let loading = false;

  const handleSubmit = e => {
    e.preventDefault();
    const countedWords = countWords(text);
    console.log(countedWords);
    if (!text) {
      notification = "Du må legge inn tekst før du kan generere en ordsky.";
      setTimeout(() => (notification = ""), 5000);
    }
  };
</script>

<form class="form" on:submit={handleSubmit}>
  <textarea
    name="text"
    class="form__textarea"
    rows="5"
    placeholder="Lim inn tekst her"
    bind:value={text} />
  <div class="notification">{notification}</div>
  <div class="flex-container">
    <button
      type="button"
      class="button button--outline"
      on:click={() => (text = '')}>
      Tøm
    </button>
    <button type="submit" id="submit" class="button" disabled={loading}>
      Generer ordsky
    </button>
    <!-- <button
      type="button"
      className="button button--outline"
      onClick={() => history.goBack()}>
      Tilbake
    </button> -->
  </div>
</form>
