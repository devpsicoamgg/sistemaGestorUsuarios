function doGet() {
  const html = HtmlService.createTemplateFromFile("Index");
  const output = html.evaluate();
  return output;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
