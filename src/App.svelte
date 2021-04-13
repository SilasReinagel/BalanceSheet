<script>
	import EntryTable from './EntryTable.svelte';
	import Summary from './SummaryWidget.svelte';

	let totalIncome = 0;
	let totalExpense = 0;
	let totalAssets = 0;
	let totalLiabilities = 0;

	const updateTotalIncome = t => {
		totalIncome = t;
	}

	const updateTotalExpense = t => {
		totalExpense = t;
	}

	const updateTotalAssets = t => {
		totalAssets = t;
	}

	const updateTotalLiabilities = t => {
		totalLiabilities = t;
	}

</script>

<main>
	<div class="title">
		<h1>Balance Sheet</h1>
	</div>
	<div class="tiles">
		<EntryTable name="Incomes" onTotalChanged={updateTotalIncome}/>
		<EntryTable name="Expenses" onTotalChanged={updateTotalExpense}/>
	</div>
	<div class="tiles">
		<EntryTable name="Assets" onTotalChanged={updateTotalAssets}/>
		<EntryTable name="Liabilities" onTotalChanged={updateTotalLiabilities}/>
	</div>
	<Summary totalIncome={totalIncome} totalExpense={totalExpense} totalAssets={totalAssets} totalLiabilities={totalLiabilities}/>
</main>

<style>
	main {
		text-align: center;
		max-width: 96vw;
		margin: 0 auto;
	}

	.title {
		background-color: #fff;
		border-radius: 6px;
		margin: 1em auto;
		max-width: 90vw;
		width: 500px;
		min-width: 350px;
	}

	h1 {
		color: #000;
		font-size: 3em;
		padding: 16px 0;
		margin: 0;
	}

	.tiles {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		max-width: 64em;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>