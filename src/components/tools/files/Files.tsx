// Dependencies
import { FC, DragEvent, ChangeEvent, useState } from "react";
import { files } from "./types";
import { formmatDateDMY } from "../../../utils/timezone.js";

// Export component
export const Files: FC = () => {
  const [error, setError] = useState<string>("");

  const [files, setFiles] = useState<files>([]);

  // Maximum possible file size
  const maxFileSize = 100 * 1024; // Bytes

  // Allowed file formats
  const acceptedFile = ["application/pdf", "text/xml", "application/xml"];

  const processFile = (file: File) => {
    if (acceptedFile.includes(file.type)) {
      if (file?.size <= maxFileSize) {
        const reader = new FileReader();

        reader.onload = function () {
          const lastModified = file?.lastModified;

          const date = formmatDateDMY(new Date(lastModified));
          // File options
          const newFile = {
            name: file?.name,
            size: (file?.size >> 10).toFixed(2),
            type: file?.type,
            lastModified: date,
          };
          setFiles((prevFiles) => [...prevFiles, newFile]);
          handleUpload(file);
        };
        reader.onerror = function (event) {
          setError("Unexpected file upload error");
          reader.abort();
        };
        reader.readAsDataURL(file);
        if (error) {
          setError("");
        }
      } else {
        setError(`Maximum file size ${maxFileSize}`);
      }
    } else {
      setError("Only PDF, XML docomments are allowed.");
    }
  };

  const chooseFile = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Upload file in server
  const handleUpload = (file: File) => {
    console.log(file);
  };

  // Drop file and upload
  const onDropFile = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    var files = event.dataTransfer?.files;
    if (files.length > 0) {
      var file = files[0];

      processFile(file);
    }
  };

  return (
    <div className="rounded-2xl overflow-x-auto  border border-dark">
      <div className="w-full px-6 bg-brandBlue pt-3 pb-4">
        <h2 className="text-[22px] text-white font-semibold">Files</h2>
      </div>
      <div className="w-full flex">
        <div className="w-full pl-2 h-[300px] overflow-y-auto ">
          <table className="w-full  border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="w-[510px] text-base text-left px-1 pb-6 pt-3 text-brandGray font-semibold">
                  Filename
                </th>
                <th className="w-[275px] text-base text-left px-4 pb-6 pt-3 text-brandGray font-semibold">
                  Uploaded By
                </th>
                <th className="w-[160px] text-base text-left px-4 pb-6 pt-3 text-brandGray font-semibold">
                  Upload Date
                </th>
                <th className="w-[160px] text-base text-left px-4 pb-6 pt-3 text-brandGray font-semibold">
                  Last Modified
                </th>
                <th className=" text-base text-left px-4 pb-6 pt-3 text-brandGray font-semibold">
                  File Size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {files?.map((file) => (
                <tr key={file.name}>
                  <td className="px-1 py-4 cursor-pointer">
                    <div className="flex gap-2 items-center">
                      {file.type == "application/pdf" ? (
                        <img src="images/icons/pdf.png" alt="XSL" />
                      ) : (
                        <img src="images/icons/xls.png" alt="XSL" />
                      )}
                      <p className="text-[22px] text-dark">{file.name}</p>
                    </div>
                  </td>
                  <td className="text-[22px] text-dark px-4 py-4">
                    Gabriela Garrido
                  </td>
                  <td className="text-[22px] text-dark px-4 py-4">6/19/2023</td>
                  <td className="text-[22px] text-dark px-4 py-4">
                    {file.lastModified}
                  </td>
                  <td className="text-[22px] text-dark px-4 py-4">
                    {file.size}KB
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="w-[325px] space-y-4 py-4 px-2 shrink-0 flex justify-center items-center flex-col"
          onDrop={(event) => onDropFile(event)}
        >
          <div className="text-red-500">{error}</div>
          <label htmlFor="upload" className="cursor-pointer">
            <figure>
              <img src="images/icons/uploads.png" alt="uploads" />
            </figure>
            <span className="inline-block w-full text-brand-gray text-base text-center">
              Drop files here or
            </span>
            <br />
            <span className="inline-block w-full text-center text-base text-brandBlueDark">
              Click Here to Upload
            </span>
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={(event) => chooseFile(event)}
              accept={acceptedFile.join(",")}
            />
          </label>
          <div className="flex gap-4 items-center">
            <button type="button" className="bg-g2 rounded-xl p-[2px]">
              <span className="flex gap-1 p-2 items-center rounded-[10px] bg-white">
                <img src="images/icons/file-icon.svg" alt="folder" />
                <span className="font-semibold text-base text-brand-blue-dark">
                  Open Folder
                </span>
              </span>
            </button>
            <button type="button" className="bg-g2 p-[2px] rounded-xl">
              <span className="flex gap-1 p-2 items-center rounded-[10px] bg-white">
                <img src="images/icons/share-icon.svg" alt="share" />
                <span className="font-semibold text-base text-brand-blue-dark">
                  Open Folder
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
