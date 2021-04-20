<script>
	import EntryTable from './EntryTable.svelte';
	import Summary from './SummaryWidget.svelte';
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import createBalanceSheet from './Backend/BalanceSheet.js';
	import PrivacySummary from './PrivacySummary.svelte';
	import saveFile from './Backend/SaveTxtFile.js';

	const createNewBalanceSheet = () => createBalanceSheet([{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }]);
	let sheet = createNewBalanceSheet();

	const getDateString = () => new Date().toLocaleDateString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	}).replaceAll('/', '');

	const updateIncomes = d => { sheet = sheet.updated(() => sheet.incomes = d); };
	const downloadCsv = t => { saveFile(sheet.toCsv(), `EZBalanceSheet-${getDateString()}.csv`);};
	const downloadJson = t => { saveFile(JSON.stringify(sheet), `EZBalanceSheet-${getDateString()}.json`); };
	const sortByValue = t => { sheet = sheet.sortedByValue(); };
	const clear = t => { sheet = createNewBalanceSheet(); };
</script>

<main>
	<DefaultLayout>
		<PrivacySummary/>
		<div class="tiles">
			<EntryTable name="Incomes" data={sheet.incomes} onDataChanged={d => sheet.updated(() => sheet.incomes = d)}/>
			<EntryTable name="Expenses" data={sheet.expenses} onDataChanged={d => sheet.updated(() => sheet.expenses = d)}/>
		</div>
		<div class="tiles">
			<EntryTable name="Assets" data={sheet.assets} onDataChanged={d => sheet.updated(() => sheet.assets = d)}/>
			<EntryTable name="Liabilities" data={sheet.liabilities} onDataChanged={d => sheet.updated(() => sheet.liabilities = d)}/>
		</div>
		<Summary balanceSheet={sheet}/>

		<div class="controls row">
			<div class="row">
				<button on:click={sortByValue}>
					<div class="icon tooltip">
						<img src="/images/sort.png" alt="Sort By Value"/>
						<div class="tooltiptext">Sort By Value</div>
					</div>
				</button>
				<button on:click={clear}>
					<div class="icon tooltip">
						<img src="/images/clear.png" alt="Clear Sheet"/>
						<div class="tooltiptext">Clear Sheet</div>
					</div>
				</button>
			</div>
			<div class="row">
				<button on:click={downloadJson}>
					<div class="icon tooltip">
						<img src="/images/json.png" alt="Download JSON"/>
						<div class="tooltiptext">Download JSON</div>
					</div>
				</button>
				<button on:click={downloadCsv}>
					<div class="icon tooltip">
						<img src="/images/csv.png" alt="Download CSV"/>
						<div class="tooltiptext">Download CSV</div>
					</div>
				</button>
			</div>
		</div>
		<div class="spacer-2"/>
	</DefaultLayout>
</main>

<style>
	main {
		text-align: center;
		max-width: 100vw;
		margin: 0 auto;
	}

	.spacer-2 {
		height: 8em;
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
