const saveTxtFile = (data, fileName) =>
{
  var blob = new Blob([data]);
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    var hiddenElement = window.document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(result);
    hiddenElement.target = "_blank";
    hiddenElement.download = fileName;
    hiddenElement.click();
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

export default saveTxtFile;
