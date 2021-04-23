<script>
  export let name, icon, onClick, isMobileHidden;
</script>

<button on:click={onClick} class={isMobileHidden ? "mobile-hidden" : ""}>
  <div class="icon tooltip">
    <img src={icon} alt={name}/>
    <div class="tooltiptext">{name}</div>
  </div>
</button>

<style>
	button {
		border: 0px;
		padding: 0.4em;
		background-color: rgba(1,1,1,0);
	}

	button:hover {
		background-color: #dedede;
	}

	.icon {
		width: 36px;
		height: 36px;
  }

  @media (max-wdith: 640px) {
		.mobile-hidden {
			display: none;
		}
	}
</style>