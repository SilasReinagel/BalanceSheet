<script>
  export let company;

  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="row">
    <p>© {year} {company.siteOwner}</p>

    <SingleColorSocialLinks/>

    <p class="small-text">App by: <a href="http://www.silasreinagel.com" class="small-text">Silas Reinagel</a></p>
  </div>
</footer>

<style>
  footer {
    padding: 12px 18px;
    height: 5.4em;
    background-color: var(--primary-background-color);
    color: #dedede;

    max-width: 48em;
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
