import { useState, useEffect, useRef } from "react";
import formatFileSize from "../../../utils/bytes";
import { IFile } from "../../../types/index";

type FolderCreateModalProps = {
  onOK?: () => void;
  onCancel?: () => void;
};

const FolderCreateModal = (props: FolderCreateModalProps) => {
  const { onOK, onCancel } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");

  const handleNameChange = (_name: string) => {
    setName(_name);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <div
        className="flex justify-center items-center bg-white rounded-lg z-50 min-w-[400px] min-h-[200px]"
        ref={modalRef}
      >
        <div>
          <h3 className="text-[22px] font-bold my-[8px] text-center">
            Enter Folder Name
          </h3>
          <input
            type="text"
            className="w-[100%] border border-[1px] rounded rounded-[5px] border-color-[#A3A3A3] px-[3px] py-[2px]"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              className="flex justify-center text-white bg-blue-800 font-medium rounded w-[88px] text-center inline-flex items-center text-1xl mt-[27px]"
              type="button"
              onClick={onOK}
            >
              OK
            </button>
            <button
              className="flex justify-center text-white bg-gray-400 font-medium rounded w-[88px] text-center inline-flex items-center text-1xl mt-[27px]"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderCreateModal;
