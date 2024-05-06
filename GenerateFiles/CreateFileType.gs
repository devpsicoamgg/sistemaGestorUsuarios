function agregarPedidoPlanilla(
  udsGroup,
  kindFormat,
  docenteResponsable,
  documentoResponsable,
  mesEntrega,
  telefonoResponsableUds, 
  dateDeEntregaCompleta, 
  codigoAAVN
) {
  const id = generarIdAleatorio();

  //testing

  const range = sheetsFiles.getRange("A2:I2");

  range.clearContent();

  range.setValues([
    [
      id,
      udsGroup,
      kindFormat,
      docenteResponsable,
      documentoResponsable,
      mesEntrega,
      telefonoResponsableUds,
      dateDeEntregaCompleta, 
      codigoAAVN
    ],
  ]);

  SpreadsheetApp.flush();

  return "Planilla Actualizada";
}

function generarIdAleatorio() {
  const id = Math.floor(Math.random() * 100000) + 1;
  return id;
}
