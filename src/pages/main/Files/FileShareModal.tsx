import { useEffect, useRef, useState } from "react";
import formatFileSize from "../../../utils/bytes";
import { IFile } from "../../../types/index";

import pngIcon from "../../../components/Assets/Group 8784.svg";
import jpgIcon from "../../../components/Assets/Group 8789.svg";
import wepIcon from "../../../components/Assets/Group 8790.svg";
import pdfIcon from "../../../components/Assets/Group 8791.svg";
import zipIcon from "../../../components/Assets/Group 8792.svg";
import svgIcon from "../../../components/Assets/Group 8793.svg";
import htmIcon from "../../../components/Assets/Group 8794.svg";
import ellipsisIcon from "../../../components/Assets/Group 8760.svg";
import tickIcon from "../../../components/Assets/Group 8841.svg";
import closeIcon from "../../../components/Assets/Group 8800.svg";

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

type FileShareModalProps = {
  file: IFile;
  onClose?: () => void;
};

const FileShareModal = (props: FileShareModalProps) => {
  const { file, onClose } = props;
  const [receiverAddr, setReceiverAddr] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const [oneTimeShareClick, setOneTimeShareClicked] = useState(false);
  const [sendClick, setSendClick] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose && onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    setOneTimeShareClicked(false);
    setSendClick(false);
    setReceiverAddr("");
    onClose && onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="fixed inset-0 bg-black opacity-80"></div>
      {file && (
        <div
          className="flex justify-center items-center bg-white rounded-lg z-50 min-w-[560px] pb-4"
          ref={modalRef}
        >
          <div className="w-[100%]">
            <div className="flex justify-between">
              <div className="flex px-10 py-4 gap-4">
                <div className="flex items-center">
                  {file.extension && (
                    <img
                      className="w-10 h-10"
                      src={file?.path ?? icons[file.extension]}
                      alt=""
                    />
                  )}
                </div>
                <div>
                  <h5 className="text-[18px] font-bold">{file.name}</h5>
                  <h5 className="text-[18px] text-gray-400">
                    {formatFileSize(file?.size)}
                  </h5>
                </div>
              </div>
              <div className="mt-1 mr-1">
                <img src={closeIcon} onClick={handleClose} />
              </div>
            </div>
            <div className="border border-[1px] px-10 py-4">
              <h5 className="text-[18px] font-bold my-[8px]">Send to:</h5>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  className="w-[100%] border border-[1px] rounded rounded-[5px] border-color-[#A3A3A3] px-[3px] py-[2px] h-[42px]"
                  placeholder="Email Address"
                  value={receiverAddr}
                  onChange={(e) => setReceiverAddr(e.target.value)}
                />
                <button
                  className="text-white button-primary-gradient font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-1xl"
                  type="button"
                  onClick={() => setSendClick(true)}
                >
                  Send
                </button>
              </div>
              {sendClick && (
                <div className="flex items-center">
                  <img className="w-8 h-8" src={tickIcon} alt="" />
                  <h5 className="text-[16px] text-[#129916]">
                    Email sent successfully
                  </h5>
                </div>
              )}
            </div>
            {oneTimeShareClick && (
              <div className="px-10 py-4">
                <h5 className="text-[18px] font-bold my-[8px]">File Link:</h5>
                <input
                  type="text"
                  className="w-[100%] border border-[1px] rounded rounded-[5px] border-color-[#A3A3A3] px-[3px] py-[2px] h-[42px]"
                  value={receiverAddr}
                  onChange={(e) => setReceiverAddr(e.target.value)}
                />
              </div>
            )}
            {!oneTimeShareClick ? (
              <div className="flex justify-between items-center w-[60%] ml-[20%] pt-4">
                <button
                  className="text-white bg-[#1A3CB5] font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-1xl"
                  type="button"
                >
                  Make Public
                </button>
                <button
                  className="text-white bg-[#1A3CB5] font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-1xl"
                  type="button"
                  onClick={() => setOneTimeShareClicked(true)}
                >
                  One Time Share Link
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <button
                  className="text-white bg-[#1A3CB5] font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center text-1xl"
                  type="button"
                >
                  Remove Public Access
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileShareModal;
