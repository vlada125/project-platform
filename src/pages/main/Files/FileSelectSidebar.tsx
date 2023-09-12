import React, { useEffect } from "react";
import { IFile } from "../../../types/index";

import blankIcon from "../../../components/Assets/Group 8757.png";
import pdfIcon from "../../../components/Assets/Group 8837.svg";
import dllIcon from "../../../components/Assets/Group 8838.svg";
import docIcon from "../../../components/Assets/Group 8839.svg";
import csvIcon from "../../../components/Assets/Group 8840.svg";
import pngIcon from "../../../components/Assets/Group 8784.svg";
import jpgIcon from "../../../components/Assets/Group 8789.svg";
import wepIcon from "../../../components/Assets/Group 8790.svg";
import zipIcon from "../../../components/Assets/Group 8792.svg";
import svgIcon from "../../../components/Assets/Group 8793.svg";
import htmIcon from "../../../components/Assets/Group 8794.svg";
import hideIcon from "../../../components/Assets/Group 8797.svg";
import formatFileSize from "../../../utils/bytes";

type FileSelectSidebarProps = {
  file?: IFile;
};

const icons: { [key: string]: string } = {
  dll: dllIcon,
  doc: docIcon,
  csv: csvIcon,
  pdf: pdfIcon,
  zip: zipIcon,
  svg: svgIcon,
  htm: htmIcon,
  png: pngIcon,
  jpg: jpgIcon,
  web: wepIcon,
};

const FileSelectSidebar = (props: FileSelectSidebarProps) => {
  const { file } = props;

  return (
    <div
      className="w-3/12 p-3 justify-center items-center"
      style={{ border: "1px solid #DBDBDB", width: "18.5%" }}
    >
      <img src={hideIcon} alt="" className="ml-2 mb-4" />
      {file ? (
        <>
          <div className="mb-4">
            {file.extension && (
              <img
                src={icons[file?.extension]}
                alt=""
                style={{ width: "85%" }}
                className="mb-2"
              />
            )}
            <div>{file.name}</div>
          </div>
          <table className="w-full">
            <tr>
              <td className="text-gray-500">Type</td>
              <td>{file.extension?.toUpperCase()}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Size</td>
              <td>{formatFileSize(file?.size)}</td>
            </tr>
            <tr>
              <td className="text-gray-500">Created</td>
              <td>12/28/2020</td>
            </tr>
            <tr>
              <td className="text-gray-500">Location</td>
              <td>{file.extension?.toUpperCase()}</td>
            </tr>
          </table>
        </>
      ) : (
        <img src={blankIcon} alt="" style={{ width: "85%" }} />
      )}
    </div>
  );
};

export default FileSelectSidebar;
