const book = './ygo_rules.pdf';
const read = document.getElementById('bookrules');

pdfjsLib.getDocument(book).promise.then(pdf => {
    pdf.getPage(1).then(page => {

        const canvas = document.createElement('canvas');
        read.appendChild(canvas);
        const context = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}).catch(err => {
    console.error('Error loading PDF:', err)
});