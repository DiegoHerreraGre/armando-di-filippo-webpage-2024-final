import React from "react";
import {PDF_files} from "../data";

/**
 * The `Repository` functional component retrieves a list of PDF files and generates a downloadable
 * and viewable representation for each file. Primary operations performed inside this component include
 * PDF file download and preview creation.
 *
 * Variables:
 *      `data_pdf_retrieved`: An array that stores downloadable and viewable objects pertaining to PDF files.
 *      `aux_data`: A copy of the imported PDF_files array.
 *
 * Functions:
 *      `downloadPdf(fileUrl, fileName)`: It is a local function that initiates a file download process.
 *      `getPreviewPdf(fileUrl)`: This function generates an iframe object for previewing a PDF from a URL.
 *
 * Operations:
 * 1. The component iterates over `aux_data`, where for each PDF file, a preview is opened, and a download
 * is allowed, adding the resulting data to `data_pdf_retrieved`.
 * 2. The React JSX renders the downloaded data. For each object in the `data_pdf_retrieved` array, a paragraph
 * tag displays the PDF preview and a button enables the file download.
 */
function Repository() {
	let data_pdf_retrieved = [];
	let aux_data = PDF_files;
	const downloadPdf = (fileUrl, fileName) => {
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
	}
	const getPreviewPdf = (fileUrl) => {
		const iframe = document.createElement('iframe');
		iframe.src = fileUrl;
		return iframe;
	}

	aux_data.forEach(pdf => {
		const preview = getPreviewPdf(pdf.url);
		const download = () => downloadPdf(pdf.url, pdf.name);
		data_pdf_retrieved.push({preview, download});
		return data_pdf_retrieved;
	});

	return (
		<>
			<section>
				{data_pdf_retrieved.map((pdf, index) => (
					<div key={index}>
						<p>{pdf.preview}</p>
						<button onClick={pdf.download}>Descargar</button>
					</div>
				))}
			</section>
		</>
	);
}

export default Repository;
