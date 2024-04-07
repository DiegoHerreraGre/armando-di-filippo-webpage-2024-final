import React from "react";
import axios from "axios"

function Repository() {
  async function getDriveFiles() {
    const driveFiles = [];
    const tokenOneDrive = process.env.REACT_APP_ONEDRIVE_TOKEN;
    const visualPreviewOfFile =
      "https://graph.microsoft.com/v1.0/me/drive/root/children";

    try {
      const response = await axios.get("", {
        headers: {
          Authorization: `Bearer ${tokenOneDrive}`,
        },
      });

      if (response.data && response.data.files) {
        for (let file of response.data.files) {
          if (
            file.mimeType === "application/pdf" ||
            file.mimeType ===
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            file.mimeType === "application/msword"
          ) {
            driveFiles.push(file.webViewLink);
          }
        }
      }
    } catch (error) {
      console.error("Error al obtener los archivos de Google Drive:", error);
    }
    return driveFiles;
  }

  const pdfRepository = getDriveFiles();
  return (
    <section>
      {pdfRepository.map((pdf, index) => (
        <a key={index} href={pdf} target="_blank" rel="noreferrer">
          Archivo {index + 1}
        </a>
      ))}
    </section>
  );
}

export default Repository;
