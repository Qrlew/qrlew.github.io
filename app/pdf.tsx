"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Pdf({ url }: { url: string}) {
    const router = useRouter();
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function onClick(): void {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber+1);
        } else {
            router.push(url);
        }
    }

    return (
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess} className="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.7)]" onClick={onClick}>
            <Page pageNumber={pageNumber} />
        </Document>
    );
}