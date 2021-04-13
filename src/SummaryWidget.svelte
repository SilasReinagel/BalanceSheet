<script>
	export let totalIncome = 0;
	export let totalExpense = 0;
	export let totalAssets = 0;
  export let totalLiabilities = 0;

  import { afterUpdate } from 'svelte';

  let monthlyCashflow = (totalIncome - totalExpense);
  let yearlyCashflow = (totalIncome - totalExpense) * 12;
  let weeklyCashflow = yearlyCashflow / 52;
  let dailyCashflow = yearlyCashflow / 365;

  const dollars = n => '$' + `${n.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;

  afterUpdate(() => {
    monthlyCashflow = totalIncome - totalExpense;
    yearlyCashflow = (totalIncome - totalExpense) * 12;
    weeklyCashflow = yearlyCashflow / 52;
    dailyCashflow = yearlyCashflow / 365;
  })
</script>

<div class="root">
  <h2>Cashflow</h2>
  <h3>Daily: {dollars(dailyCashflow)}</h3>
  <h3>Weekly: {dollars(weeklyCashflow)}</h3>
  <h3>Monthly: {dollars(monthlyCashflow)}</h3>
  <h3>Yearly: {dollars(yearlyCashflow)}</h3>
  <hr/>
  <h2>Net Worth</h2>
  <h3>{dollars(totalAssets - totalLiabilities)}</h3>
</div>

<style>
	.root {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    max-width: 90vw;
    min-width: 350px;
		background-color: #fff;
		border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    padding: 24px;
  }

  h2 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  h3 {
    margin: 2px;
  }

  hr {
    margin-top: 1em;
    width: 100%;
    border-top: 1px solid #000;
  }
</style>