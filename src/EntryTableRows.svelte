<script>
  export let data = [];
  export let setData;

	import { afterUpdate } from 'svelte';

  let dataById = [];

  afterUpdate(() => {
    dataById = data.map((d, id) => ({ ...d, id}));
  });

  const updateName = (e, id) => {
    const val = e.target.value;
    console.log({ e, id });
    dataById[id].name = val;
    data = dataById.sort(d => d.id);
    setData(data);
  }

  const updateAmount = (e, id) => {
    const val = e.target.value;
    console.log({ e, id });
    dataById[id].amount = val;
    data = dataById.sort(d => d.id);
    setData(data);
  }

</script>

{#each dataById as d}
  <tr>
    <td class="left">
      <input type="string" value={d.name} on:change={e => updateName(e, d.id)}/>
    </td>
    <td class="left">
      <input type="number" value={d.amount} on:change={e => updateAmount(e, d.id)}/>
    </td>
  </tr>
{/each}

<style>
  .left {
    text-align: left;
  }

  td {
    max-width: 100;
    width: 100;
  }
</style>