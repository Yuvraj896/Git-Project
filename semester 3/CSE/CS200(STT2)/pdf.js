// Open the PDF overlay
function openPdf(pdfUrl) {
    document.getElementById('pdf-frame').src = pdfUrl;
    document.getElementById('pdf-container').style.display = 'block';
}

    // Close the PDF overlay
function closePdf() {
    document.getElementById('pdf-frame').src = '';
    document.getElementById('pdf-container').style.display = 'none';
}