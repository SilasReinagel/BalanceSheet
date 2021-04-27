<script>
 let open = false;

 const toggleView = e => open = !open;
</script>

<section>
  <div class="fixed-bottom-right-corner">
  {#if !open}
    <button class="open-button no-margin" on:click={toggleView}><img src="images/comment.png" alt="Write Feedback"/></button>
  {/if}

  {#if open}
    <form class="feedback-form" name="feedback" form-name="feedback" method="POST" data-netlify="true" netlify-honeypot="bot-field">
      <div class="row">
        <h2>Feedback</h2>
        <button class="close-button" on:click={toggleView}><h3>X</h3></button>
      </div>
      <div hidden aria-hidden="true">
        <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <textarea name="message" placeholder="Your Message"/>
      <button class="send-button" type="submit"><h3>Send</h3></button>
    </form>
  {/if}
  </div>
</section>

<style>
	button:hover {
		background-color: #dedede;
	}

  .close-button {
    background-color: #fff;
    padding: 0.3em;
    border: 0px;
  }

  .open-button {
    padding: 0.5em;
    font-size: 1em;
    background-color: #fff;
    border: 0px;
    border-radius: 12px;
  }

  img {
    max-height: 32px;
    height: 32px;
    width: 32px;
  }

  h3 {
    margin: 0;
  }

  .send-button {
    padding: 0.3em;
    margin: 1em 25%;
    font-size: 1em;
    background-color: #fff;
    border: var(--primary-background-color) solid 2px;
    border-radius: 6px;
  }

  .fixed-bottom-right-corner
  {
    position: fixed !important;
    right: 16px !important;
    bottom: 16px !important;
  }

  h2 {
    margin: 0.3em auto;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .feedback-form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: var(--primary-background-color) 2px solid;
    border-radius: 6px;
    width: 350px;
    padding: 16px;
  }

  input {
    padding: 1em;
    margin: 1em 0;
    background-color: var(--input-background-color);
    border: 0;
    border-radius: 1em;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    transition: background-color 5000s ease-in-out 0s;
  }
  /*Change text in autofill textbox*/
  input:-webkit-autofill {
      -webkit-text-fill-color: var(--secondary-color) !important;
  }

  textarea {
    background-color: var(--input-background-color);
    border: var(--primary-background-color) solid 2px;
    border-radius: 1em;
    color: var(--secondary-color);
    padding: 1em;
    margin: 1em 0;
    min-height: 12em;
  }

  textarea:focus, input:focus{
      outline: none;
  }

  ::placeholder {
    color: var(--secondary-color);
    opacity: 1;
  }
</style>
