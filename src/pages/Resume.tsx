import React from 'react';
import pdf from '../Assets/Resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
            <a href={pdf} download="Resume.pdf">Download</a>
        </div>
    );
}

export default Resume;
