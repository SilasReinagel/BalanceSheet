<script>
	import EntryTable from './EntryTable.svelte';
	import Summary from './SummaryWidget.svelte';
	import createBalanceSheet from './Backend/BalanceSheet.js';
	import saveFile from './Backend/SaveTxtFile.js';

	let sheet = createBalanceSheet([{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }]);

	const getDateString = () => new Date().toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	}).replaceAll('/', '');

	const updateIncomes = d => { sheet = sheet.updated(() => sheet.incomes = d); };
	const downloadCsv = t => { saveFile(sheet.toCsv(), `EZBalanceSheet-${getDateString()}.csv`);};
	const downloadJson = t => { saveFile(JSON.stringify(sheet), `EZBalanceSheet-${getDateString()}.json`); };
	const sortByValue = t => { sheet = sheet.sortedByValue(); };
</script>

<main>
	<div class="title">
		<h1>Balance Sheet</h1>
	</div>
	<div class="controls row">
		<div class="row">
			<button on:click={sortByValue}>
				<div class="icon">
					<img src="/images/sort.png" alt="Sort By Value"/>
				</div>
			</button>
		</div>
		<div class="row">
			<button on:click={downloadJson}>
				<div class="icon">
					<img src="/images/json.png" alt="Download JSON"/>
				</div>
			</button>
			<button on:click={downloadCsv}>
				<div class="icon">
					<img src="/images/csv.png" alt="Download CSV"/>
				</div>
			</button>
		</div>
	</div>

	<div class="tiles">
		<EntryTable name="Incomes" data={sheet.incomes} onDataChanged={d => sheet.updated(() => sheet.incomes = d)}/>
		<EntryTable name="Expenses" data={sheet.expenses} onDataChanged={d => sheet.updated(() => sheet.expenses = d)}/>
	</div>
	<div class="tiles">
		<EntryTable name="Assets" data={sheet.assets} onDataChanged={d => sheet.updated(() => sheet.assets = d)}/>
		<EntryTable name="Liabilities" data={sheet.liabilities} onDataChanged={d => sheet.updated(() => sheet.liabilities = d)}/>
	</div>
	<Summary balanceSheet={sheet}/>
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

	.controls {
		padding-left: 1em;
		padding-right: 1em;
		padding-top: 0.3em;
		padding-bottom: 0.3em;
		background-color: #fff;
		border-radius: 6px;
		margin: 1em auto;
		max-width: 90vw;
		width: 500px;
		min-width: 350px;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	button {
		border: 0px;
		padding: 0.4em;
		background-color: rgba(1,1,1,0);
	}

	button:hover {
		background-color: #dedede;
	}

	.icon {
		width: 48px;
		height: 48px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>