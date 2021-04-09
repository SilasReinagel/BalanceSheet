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
  <h2>Daily Cashflow: {dollars(dailyCashflow)}</h2>
  <h2>Weekly Cashflow: {dollars(weeklyCashflow)}</h2>
  <h2>Monthly Cashflow: {dollars(monthlyCashflow)}</h2>
  <h2>Yearly Cashflow: {dollars(yearlyCashflow)}</h2>
  <hr/>
  <h2>Net Worth: {dollars(totalAssets - totalLiabilities)}</h2>
</div>

<style>
	.root {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    max-width: 100vw;
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
</style>