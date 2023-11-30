import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const MyPdfViewer = () => {
  const pdfUrl = "/assets/MyCv.pdf";
  const pdfWorkerUrl = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

  return (
    <div>
      <Worker workerUrl={pdfWorkerUrl}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default MyPdfViewer;
