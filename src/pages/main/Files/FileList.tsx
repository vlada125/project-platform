import { useState, useRef, useEffect } from "react";
import {
  FiShare2,
  FiDownloadCloud,
  FiEdit2,
  FiMove,
  FiTrash2,
} from "react-icons/fi";

import { IFile } from "../../../types/index";
import { FILES } from "./mockup";

import pngIcon from "../../../components/Assets/Group 8784.svg";
import jpgIcon from "../../../components/Assets/Group 8789.svg";
import wepIcon from "../../../components/Assets/Group 8790.svg";
import pdfIcon from "../../../components/Assets/Group 8791.svg";
import zipIcon from "../../../components/Assets/Group 8792.svg";
import svgIcon from "../../../components/Assets/Group 8793.svg";
import htmIcon from "../../../components/Assets/Group 8794.svg";
import ellipsisIcon from "../../../components/Assets/Group 8760.svg";
import viewmodeIcon from "../../../components/Assets/Group 8770.svg";
import vectorIcon from "../../../components/Assets/Vector 10.svg";
import FileDownloadModal from "./FileDownloadModal";

const icons: { [key: string]: string } = {
  png: pngIcon,
  jpg: jpgIcon,
  web: wepIcon,
  pdf: pdfIcon,
  zip: zipIcon,
  svg: svgIcon,
  htm: htmIcon,
  ellipsis: ellipsisIcon,
};

type FileListProps = {
  onSelect?: (file: IFile) => void;
  onOpen?: (file: IFile) => void;
  onDownload: (file: IFile) => void;
  onShare: (file: IFile) => void;
};

const FileList = (props: FileListProps) => {
  const { onSelect, onOpen, onDownload, onShare } = props;
  const [viewMode, setViewMode] = useState(false);
  const [contextFile, setContextFile] = useState<IFile | undefined>(undefined);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target as Node)
      ) {
        setContextFile(undefined);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const viewModeChange = () => {
    setViewMode((prev) => !prev);
  };

  const showContextMenu = (event: React.MouseEvent, file: IFile) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setContextFile(file);
  };

  const hideContextMenu = () => {
    setContextFile(undefined);
  };

  return (
    <div className="Recent Files">
      <div className="flex justify-between items-center p-1">
        <div className="Heading">
          <h2 className="recent-files text-xl my-4">
            <b>Recent Files</b>
          </h2>
        </div>
        <div className="icons" onClick={() => viewModeChange()}>
          <img src={viewmodeIcon} alt="" />
        </div>
      </div>
      <div>
        {viewMode ? (
          <table className="w-full">
            <a href=""></a>
            <tr className="table-heaing">
              <div className="flex items-center">
                <th className="pl-10 flex gap-1 items-center">
                  Modified
                  <img src={vectorIcon} alt="" />
                </th>
              </div>
              <th>Location</th>
              <th>Owner</th>
              <th></th>
            </tr>

            {FILES.map((file, index) => {
              return (
                <tr
                  className="table-data hover:bg-blue-400"
                  onClick={() => onSelect && onSelect(file)}
                  onDoubleClick={() => onOpen && onOpen(file)}
                  key={`file-item-${index}`}
                  onContextMenu={(e) => showContextMenu(e, file)}
                >
                  {contextFile === file && (
                    <div
                      style={{ top: position.y, left: position.x }}
                      className="absolute z-10 bg-white shadow rounded border border-gray-300"
                      onClick={hideContextMenu}
                      ref={contextMenuRef}
                    >
                      <ul className="py-2">
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiEdit2 size={24} className="mr-2" />
                          Rename
                        </li>
                        <li
                          className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            onShare(file);
                          }}
                        >
                          <FiShare2 size={24} className="mr-2" />
                          Share
                        </li>
                        <li
                          className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            onDownload(file);
                          }}
                        >
                          <FiDownloadCloud size={24} className="mr-2" />
                          Download
                        </li>
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiMove size={24} className="mr-2" />
                          Move
                        </li>
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiTrash2 size={24} className="mr-2" />
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                  <td className="table-data-img flex items-center gap-2">
                    <img
                      className="recentfiles-img"
                      src={file?.path ?? icons[file?.extension]}
                      alt=""
                    />
                    {file.name}
                  </td>
                  <td>{file.location}</td>
                  <td>{file.owner}</td>
                  <td>
                    <img
                      className="recentfiles-img"
                      src={ellipsisIcon}
                      alt=""
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <div className="flex flex-wrap justify-center overflow-hidden">
            {FILES.map((file, index) => {
              return (
                <div
                  className="w-[25%] p-2"
                  onClick={() => onSelect && onSelect(file)}
                  onDoubleClick={() => onOpen && onOpen(file)}
                  onContextMenu={(e) => showContextMenu(e, file)}
                >
                  {contextFile === file && (
                    <div
                      style={{ top: position.y, left: position.x }}
                      className="absolute z-10 bg-white shadow rounded border border-gray-300"
                      onClick={hideContextMenu}
                      ref={contextMenuRef}
                    >
                      <ul className="py-2">
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiEdit2 size={24} className="mr-2" />
                          Rename
                        </li>
                        <li
                          className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            onShare(file);
                          }}
                        >
                          <FiShare2 size={24} className="mr-2" />
                          Share
                        </li>
                        <li
                          className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            onDownload(file);
                          }}
                        >
                          <FiDownloadCloud size={24} className="mr-2" />
                          Download
                        </li>
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiMove size={24} className="mr-2" />
                          Move
                        </li>
                        <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FiTrash2 size={24} className="mr-2" />
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="Cards">
                    <div
                      className="bg-white rounded-lg overflow-hidden"
                      style={{ border: "1px solid #aba4a4" }}
                    >
                      <div className="h-[128px] items-center flex justify-center">
                        <img
                          src={file?.path ?? icons[file?.extension]}
                          alt="Image"
                          className="h-[90%]"
                        />
                      </div>
                      <div className="p-1" style={{ height: "43px" }}>
                        <h2 className="text-xs font-semibold">{file.name}</h2>
                        <p
                          className="text-gray-600 mt-1"
                          style={{ fontSize: "9px" }}
                        >
                          Ceated Today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileList;
