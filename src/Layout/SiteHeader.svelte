<script>
  export let pageName;

  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import site from '../static-content';
  //import { pages } from '../pages.js';
</script>

<header class="">
  <nav class="navbar-left">
    <a class="steam-link" href="./">
      <img src="favicon.png" alt="Logo" width=38 height=38/>
      <h1>{site.name}</h1>
    </a>
  </nav>
  <SiteSidebar bind:open={sidebarOpen} />
  <nav class="navbar-right tablet-hidden">
    <!-- {#each pages.filter(p => !!p.showInMainNav && (!pageName || p.name !== pageName)) as page}
      <a class="navlink decor-font" href={page.href}>{page.name}</a>
    {/each} -->
    {#if site.social.twitter}
      <a class="link mobile-hidden" href={site.social.twitter}>
        <img src="social/twitter-multi-color.png" alt="Twitter Icon"/>
      </a>
    {/if}
    {#if site.social.github}
      <a class="link mobile-hidden" href={site.sourceCode}>
        <img src="social/github-multi-color.png" alt="Github Icon"/>
      </a>
    {/if}
    {#if site.social.reddit}
      <a class="link mobile-hidden" href={site.social.reddit}>
        <img src="social/reddit-multi-color.png" alt="Reddit Icon"/>
      </a>
    {/if}
  </nav>
  <HamburgerIcon bind:open={sidebarOpen}/>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-sizing: content-box;
    background-color: rgba(255, 255, 255, 1);
    height: 60px;
    z-index: 1;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    height: 60px;
    color: var(--primary-color);
    padding: 0 0.8em;
  }

  a:hover {
		background-color: #dedede;
  }

  a:active {
		background-color: #dedede;
  }

  a img {
    width: 38px;
  }

  a img:last-of-type {
    margin-right: 0.5em;
  }

  .home {
    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 10px;
  }

  .navlink {
    color: var(--primary-color);
    padding: 0 1.2em;
    font-size: 1.2em;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 350ms;
    text-align: center;
  }

  .link img {
    filter: none;
  }

  .link:hover {
		background-color: #dedede;
  }

  .link:active {
		background-color: #dedede;
  }
</style>
