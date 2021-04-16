const sumAmount = d => d.map(x => new Number(x.amount)).reduce((a, v) => a + v, 0);

const nameFor = (arr, i) => arr.length > i ? arr[i].name : "";
const amountFor = (arr, i) => arr.length > i ? arr[i].amount : "";
const csvEnclosedVal = (val) => (typeof val == "string") ? '"' + val + '"' : val;
const csvRow = (vals) => vals.map(v => csvEnclosedVal(v)).join(",");
const byValueNumberDesc = (a, b) => new Number(b.amount) - new Number(a.amount);
const toCsv = (sheet) => {
  const csv = [];
  csv.push(csvRow(["Incomes", "", "Expenses", "", "Assets", "", "Liabilities", "", "Net Worth", "MonthlyCashflow"]));
  var totalRows = Math.max(sheet.incomes.length, sheet.expenses.length, sheet.assets.length, sheet.liabilities.length);
  for (let i = 0; i < totalRows; i++)
  {
    csv.push(csvRow([nameFor(sheet.incomes, i), amountFor(sheet.incomes, i), nameFor(sheet.expenses, i), amountFor(sheet.expenses, i),
      nameFor(sheet.assets, i), amountFor(sheet.assets, i), nameFor(sheet.liabilities, i), amountFor(sheet.liabilities, i), "", ""]));
  }
  csv.push(csvRow(["Total:", sheet.totalIncomes, "Total:", sheet.totalExpenses, "Total:", sheet.totalAssets, "Total:", sheet.totalLiabilities,
      sheet.netWorth, sheet.monthlyCashflow]));
  return csv.join("\r\n");
};

const balanceSheet = (incomes, expenses, assets, liabilities) =>
{
  const sheet = ({
    incomes,
    expenses,
    liabilities,
    assets,
    totalIncomes: 0,
    totalExpenses: 0,
    totalAssets: 0,
    totalLiabilities: 0,
    netWorth : 0,
    monthlyCashflow: 0,
    yearlyCashflow: 0,
    weeklyCashflow: 0,
    dailyCashflow: 0
  });
  sheet.toCsv = () => toCsv(sheet);
  sheet.updated = (action) => {
    action();
    sheet.totalAssets = sumAmount(sheet.assets);
    sheet.totalLiabilities = sumAmount(sheet.liabilities);
    sheet.netWorth = sheet.totalAssets - sheet.totalLiabilities;

    sheet.totalIncomes = sumAmount(sheet.incomes);
    sheet.totalExpenses = sumAmount(sheet.expenses);
    sheet.monthlyCashflow = sheet.totalIncomes - sheet.totalExpenses;
    sheet.yearlyCashflow = sheet.monthlyCashflow * 12;
    sheet.weeklyCashflow = sheet.yearlyCashflow / 52;
    sheet.dailyCashflow = sheet.yearlyCashflow / 365;
    return sheet;
  };
  sheet.sortedByValue = () => {
    sheet.incomes.sort(byValueNumberDesc);
    sheet.expenses.sort(byValueNumberDesc);
    sheet.assets.sort(byValueNumberDesc);
    sheet.liabilities.sort(byValueNumberDesc);
    return sheet;
  };
  return sheet.updated(() => {});
};

export default balanceSheet;