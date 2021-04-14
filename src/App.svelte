<script>
	import EntryTable from './EntryTable.svelte';
	import Summary from './SummaryWidget.svelte';
	import createBalanceSheet from './Backend/BalanceSheet.js';
	import saveFile from './Backend/SaveTxtFile.js';
	import CsvIcon from './Icons/CsvDownload.svelte';

	let sheet = createBalanceSheet([], [], [], []);

	const getDateString = () => new Date().toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	}).replaceAll('/', '');

	const updateIncomes = d => { sheet = sheet.updated(() => sheet.incomes = d); }
	const downloadCsv = t => { saveFile(sheet.toCsv(), `EZBalanceSheet-${getDateString()}.csv`);	}
</script>

<main>
	<div class="title">
		<h1>Balance Sheet</h1>
	</div>
	<div class="tiles">
		<EntryTable name="Incomes" onDataChanged={d => sheet.updated(() => sheet.incomes = d)}/>
		<EntryTable name="Expenses" onDataChanged={d => sheet.updated(() => sheet.expenses = d)}/>
	</div>
	<div class="tiles">
		<EntryTable name="Assets" onDataChanged={d => sheet.updated(() => sheet.assets = d)}/>
		<EntryTable name="Liabilities" onDataChanged={d => sheet.updated(() => sheet.liabilities = d)}/>
	</div>
	<Summary balanceSheet={sheet}/>

	<div class="controls row">
		<h2>Export:</h2>
		<button on:click={downloadCsv}><CsvIcon/></button>
	</div>
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
		background-color: rgba(1,1,1,0);
	}

	button:hover {
		background-color: #dedede;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>