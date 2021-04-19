<script>
  export let company;

  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="row">
    <p class="disclaimer">Your privacy is protected 100%. This web application is stateless. None of your information is tracked. 
      There are no cookies. None of your data is stored or captured.</p>
  </div>

  <div class="row">
    <p>© {year} {company.siteOwner}</p>

    <SingleColorSocialLinks/>

    <p class="small-text">App by: <a href="http://www.silasreinagel.com" class="small-text">Silas Reinagel</a></p>
  </div>
</footer>

<style>
  footer {
    padding: 12px 18px;
    height: 8.4em;
    background-color: var(--primary-background-color);
    color: #dedede;

    max-width: 64em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  a {
    color: #dedede;
    font-weight: 800;

    font-size: 1em;
  }

  p {
    color: #dedede;
  }

  .disclaimer {
    color: #dedede;
    max-width: 48em;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
