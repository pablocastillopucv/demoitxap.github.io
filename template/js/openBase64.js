function openBase64PDF(base64URL) {
  var base64 = base64URL;
  const blob = base64ToBlob(base64, "application/pdf");
  const pdfWindow = window.open();
  pdfWindow.location = URL.createObjectURL(blob);
  pdfWindow.document.close();
}

function base64ToBlob(base64, type = "application/octet-stream") {
  const binStr = atob(base64);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new Blob([arr], { type: type });
}

function abrirDocumento() {
  fetch("./docs/documento.txt")
    .then((response) => response.text())
    .then((data) => {
      openBase64PDF(data);
    });
}