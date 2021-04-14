<script>
  export let data = [];
  export let setData;

	import { afterUpdate } from 'svelte';

  let localData = [];

  afterUpdate(() => { localData = data; });

  const updateName = (e, id) => {
    const val = e.target.value;
    localData[id].name = val;
    setData(localData);
  }

  const updateAmount = (e, id) => {
    const val = e.target.value;
    localData[id].amount = val;
    setData(localData);
  }

  const removeRow = (e, id) => {
    setData(localData.splice(id, 1));
  }

</script>

{#each localData as d}
  <tr>
    <td class="left">
      <input type="string" value={d.name} on:change={e => updateName(e, d.id)}/>
    </td>
    <td class="left">
      <input type="number" value={d.amount} on:change={e => updateAmount(e, d.id)}/>
    </td>
    <button tabindex="-1" on:click={e => removeRow(e, d.id)}><b>X</b></button>
  </tr>
{/each}

<style>
  .left {
    text-align: left;
  }

  td {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
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