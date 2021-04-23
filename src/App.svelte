<script>
	import EntryTable from './EntryTable.svelte';
	import Summary from './SummaryWidget.svelte';
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import { balanceSheet, balanceSheetFromJson } from './Backend/BalanceSheet.js';
	import PrivacySummary from './PrivacySummary.svelte';
	import TextFileUpload from './Elements/TextFileUpload.svelte';
	import IconButton from './Elements/IconButton.svelte';
	import saveFile from './Backend/SaveTxtFile.js';

	const createNewBalanceSheet = () => balanceSheet([{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }], [{ id: 0, name: "", amount: "" }]);
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
	const eraseValues = t => { sheet = sheet.withClearedValues(); };
	const onJsonImport = j => { sheet = balanceSheetFromJson(JSON.parse(j)); };
	let beginUpload;
</script>

<TextFileUpload onTextLoaded={onJsonImport} bind:selectFile={beginUpload}/>
<main>
	<DefaultLayout pageName="App">
		<div class="controls-bar row">
			<div class="row">
				<IconButton name="New Sheet" icon="images/document.png", onClick={clear}/>
				<IconButton name="Import JSON" icon="images/open.png", onClick={beginUpload} mobileHidden={true}/>
				<IconButton name="Sort By Value" icon="images/sort.png", onClick={sortByValue}/>
				<IconButton name="Erase Values" icon="images/erase.png", onClick={eraseValues}/>
			</div>
			<div class="row">
				<IconButton name="Download JSON" icon="images/json.png", onClick={downloadJson} mobileHidden={true}/>
				<IconButton name="Download CSV" icon="images/csv.png", onClick={downloadCsv} mobileHidden={true}/>
			</div>
		</div>
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

	.controls-bar {
		width: 100%;
		background-color: #fff;
		padding: 0 2.4em;
		border-top: 1px solid #dadce0;
		border-bottom: 1px solid #dadce0;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
