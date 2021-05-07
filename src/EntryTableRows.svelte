<script>
  export let data = [];
  export let setData;

	import { afterUpdate } from 'svelte';

  let localData = [];

  afterUpdate(() => { localData = data; });

  const updateName = (e, id) => {
    const val = e.target.value;
    localData[getIndex(id)].name = val;
    setData(localData);
  }

  const updateAmount = (e, id) => {
    console.log("Update Amount")
    const val = e.target.value.replace("$", "").replace(",", "");
    console.log(val);
    localData[getIndex(id)].amount = val;
    setData(localData);
  }

  const removeRow = (e, id) => {
    setData(localData.filter(d => d.id != id));
  }

  const getIndex = (id) => localData.findIndex(e => e.id === id);

</script>

{#each localData as d}
  <tr>
    <td class="left">
      <input type="string" value={d.name} on:change={e => updateName(e, d.id)}/>
    </td>
    <td class="left">
      <input type="string" value={d.amount} on:change={e => updateAmount(e, d.id)}/>
    </td>
    <td>
      {#if localData.length > 1} 
        <button tabindex="-1" on:click={e => removeRow(e, d.id)}><b>X</b></button>
      {/if}
    </td>
  </tr>
{/each}

<style>
  .left {
    text-align: left;
  }

  td {
    margin: 0;
    padding: 0;
    border: 1px solid grey;
  }

  input {
    border: 0px;
    margin: 0;
    width: 100%;
    padding-left: 2px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    background-color: rgba(1, 1, 1, 0);
    border: 0px;
  }
</style>