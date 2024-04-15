function agregarPedidoPlanilla(
  udsGroup,
  kindFormat,
  docenteResponsable,
  documentoResponsable,
  mesEntrega,
  telefonoResponsableUds
) {
  const id = generarIdAleatorio();

  const range = sheetsFiles.getRange("A2:g2");

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
    ],
  ]);

  SpreadsheetApp.flush();

  return "Planilla Actualizada";
}

function generarIdAleatorio() {
  const id = Math.floor(Math.random() * 100000) + 1;
  return id;
}