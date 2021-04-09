<script>
  export let name = "Table";
  export let data = [{ name: "", amount: "" }];
  export let onTotalChanged = t => {};

  let total = 0;

  const addNew = () => {
    console.log("Clicked");
    setData([ ...data, { name: "", amount: "" }])
  }

  const setData = d => {
    console.log("Set New Table");
    data = d;
    update();
  }

  const update = () => {
    data.forEach(x => console.log(x));
    total = data.map(x => new Number(x.amount)).reduce((a, v) => a + v);
    onTotalChanged(total);
  }

  import DataRows from './EntryTableRows.svelte';
</script>

<div class="root">
  <div class="header">
    <h2>{name}</h2>
    <button on:click={addNew}>+</button>
  </div>
  <table>
    <tr>
      <th class="left" style="width: 100px"><b>Name</b></th>
      <th class="left" style="width: 100px"><b>Value</b></th>
    </tr>

    <tr class="line"><td/><td/></tr>

    <DataRows data={data} setData={setData}/>

    <tr class="line"><td/><td/></tr>
    <tr>
      <td class="left"><b>Total:</b></td>
      <td class="left"><b>${total}</b></td>
    </tr>
  </table>
</div>

<style>
  .root {
    max-width: 90vw;
    width: 500px;
    background-color: #fff;
    border-radius: 6px;
    padding: 0.2em 1em 0.5em 1em;
    margin: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  table {
    width: 100%;
    border-collapse: collapse;
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
  }

  .line {
    border-bottom: 2px solid #000;
  }
</style>
