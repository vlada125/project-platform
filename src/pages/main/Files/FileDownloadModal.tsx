import { useEffect, useRef } from "react";
import formatFileSize from "../../../utils/bytes";
import { IFile } from "../../../types/index";

type FileDownloadModalProps = {
  file: IFile;
  onClose?: () => void;
};

const FileDownloadModal = (props: FileDownloadModalProps) => {
  const { file, onClose } = props;
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <div
        className="flex justify-center items-center bg-white rounded-lg z-50 min-w-[420px] min-h-[360px]"
        ref={modalRef}
      >
        <div>
          <h3 className="text-[22px] font-bold my-[8px]">{file.name}</h3>
          <h5 className="text-[16px] my-[8px] text-gray-400 text-center">
            Type: {file.extension}
          </h5>
          <h5 className="text-[16px] my-[8px] text-gray-400 text-center">
            {formatFileSize(file?.size)}
          </h5>
          <div className="flex justify-center items-center">
            <button
              className="text-white button-primary-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-1xl mt-[43px]"
              type="button"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileDownloadModal;
