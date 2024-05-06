
function obtenerEnlaceDescarga() {
  const BD_ID = '1oaoo3UCSy7ttwMlziYbjdgCWlT3v7FUhACvNY4YFDeY';
  const SS = SpreadsheetApp.openById(BD_ID);
  const rangeDataDow = SS.getSheetByName('Links').getRange('E1');
  return rangeDataDow.getValue();
}
