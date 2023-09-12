import downloadImage from "../../../components/Assets/Download 1.png";
import formatFileSize from "../../../utils/bytes";
import { IFile } from "../../../types/index";

import closeIcon from "../../../components/Assets/Group 8800.svg";
import shareIcon from "../../../components/Assets/Share.svg";
import chatbotIcon from "../../../components/Assets/ChatBot.svg";

type FilePreviewModalProps = {
  file: IFile;
  onClose?: () => void;
};

const FilePreviewModal = (props: FilePreviewModalProps) => {
  const { file, onClose } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <div className="flex bg-white rounded-lg z-50 min-w-[800px] min-h-[600px]">
        <div className="w-3/4 flex flex-col justify-center items-center">
          <div>
            <h5 className="text-[16px] font-bold">{file.name}</h5>
          </div>
          <div className="my-auto w-[80%]">
            {!file.path ? (
              <div className="flex-col justify-center items-center">
                <img src={downloadImage} alt="" className="mx-auto" />
                <div style={{ width: "100%" }}>
                  <h5 className="text-[16px] text-center">
                    No Preview Available
                  </h5>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center w-[100%]">
                <img src={file.path} alt="" className="w-[100%]" />
              </div>
            )}
          </div>
        </div>
        <div className="w-1/4 bg-[#1A3CB5] flex flex-col justify-center items-center">
          <div className="w-[100%]">
            <img
              src={closeIcon}
              onClick={onClose}
              className="float-right mt-1"
            />
          </div>
          <div className="my-auto flex-col justify-center items-center text-white">
            <h5 className="text-[18px]">Location: {file.location}</h5>
            <h5 className="text-[18px]">
              File Size: {formatFileSize(file?.size)}
            </h5>
            <h5 className="text-[18px]">Created: {file.createdAt}</h5>
            <div className="flex flex-col items-center justify-items space-y-8 mt-8">
              <button
                className="text-white button-primary-gradient font-medium rounded-lg px-5 py-2.5 text-center text-1xl w-[80%]"
                type="button"
              >
                Download
              </button>
              {!file.path && (
                <button
                  className="rounded-md bg-gradient-to-r from-[#02BCF3] to-[#DF1BA7] p-1 text-center text-1xl w-[80%] h-[44px]"
                  type="button"
                >
                  <div className="flex h-full w-full items-center justify-center bg-white back rounded-md">
                    <img src={chatbotIcon} className="mr-1" alt="" />
                    <h5 className="text-[16px] text-[#0945B8]">Add to AI</h5>
                  </div>
                </button>
              )}
              <button
                className="rounded-md bg-gradient-to-r from-[#02BCF3] to-[#DF1BA7] p-1 text-center text-1xl w-[80%] h-[44px]"
                type="button"
              >
                <div className="flex h-full w-full items-center justify-center bg-white back rounded-md">
                  <img src={shareIcon} className="mr-1" alt="" />
                  <h5 className="text-[16px] text-[#0945B8]">Share</h5>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreviewModal;
