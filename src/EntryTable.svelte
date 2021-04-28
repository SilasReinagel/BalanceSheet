<script>
  export let name = "Table";
  export let data = [{ id: 0, name: "", amount: "" }];
  export let onTotalChanged = t => {};
  export let onDataChanged = d => {};

	import { afterUpdate } from 'svelte';
  import DataRows from './EntryTableRows.svelte';

  let total = 0;

  const addNew = () => {
    if (data.every(x => x.name.length > 0))
      setData([ ...data, { id: data.length, name: "", amount: "" }])
  };

  const setData = d => {
    data = d;
    update();
  };

  const update = () => {
    total = data.map(x => new Number(x.amount)).reduce((a, v) => a + v);
    onTotalChanged(total);
    onDataChanged(data);

    if (data.every(x => x.name.length > 0))
      addNew();
  };

  afterUpdate(() => update());

  const dollars = n => '$' + `${n.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
</script>

<div class="root">
  <div class="header">
    <h2>{name}</h2>
  </div>
  <table>
    <tr>
      <th width="42%" class="left"><b>Name</b></th>
      <th width="42%" class="left"><b>Value</b></th>
      <th width="8%"></th>
    </tr>

    <tr class="line"></tr>

    <DataRows data={data} setData={setData}/>

    <tr class="line"></tr>
    <tr>
      <td class="left"><b>Total:</b></td>
      <td class="left"><b>{dollars(total)}</b></td>
      <td></td>
    </tr>
  </table>
</div>

<style>
  .root {
    max-width: 90vw;
    width: 500px;
    min-width: 350px;
    background-color: #fff;
    border-radius: 6px;
    padding: 0.2em 1em 0.5em 1em;
    margin: 0.4em;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    margin: 0.2em 0 0.4em 0;
  }

  td {
    border: 1px solid grey;
  }

  th {
    border: 1px solid grey;
    max-width: 100px;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #000;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  button {
    border: 0px;
    padding: 1em;
    background-color: rgba(1, 1, 1, 0);
  }

  .line {
    border-bottom: 2px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
</style>
