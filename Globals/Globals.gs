const BD_ID = "1yTVPo1vqrnHKqcjOXdwAt4TnY4NdZQlswCb69fNUb7c";
const SS = SpreadsheetApp.openById(BD_ID);
const sheetsUsers = SS.getSheetByName("Users");
const sheetsFiles = SS.getSheetByName("downLoadData");

function obtenerEnlaceDescarga() {
  const BD_ID = "1yTVPo1vqrnHKqcjOXdwAt4TnY4NdZQlswCb69fNUb7c";
  const SS = SpreadsheetApp.openById(BD_ID);
  const rangeDataDow = SS.getSheetByName("Links").getRange("E1");
  return rangeDataDow.getValue();
}
