<script>
	export let balanceSheet;

  const dollars = n => '$' + `${(!!n ? n : 0).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
</script>

<div class="root">
  <h2>Cashflow</h2>
  <h3>Daily: {dollars(balanceSheet.dailyCashflow)}</h3>
  <h3>Weekly: {dollars(balanceSheet.weeklyCashflow)}</h3>
  <h3>Monthly: {dollars(balanceSheet.monthlyCashflow)}</h3>
  <h3>Yearly: {dollars(balanceSheet.yearlyCashflow)}</h3>
  <hr/>
  <h2>Net Worth</h2>
  <h3>{dollars(balanceSheet.netWorth)}</h3>
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