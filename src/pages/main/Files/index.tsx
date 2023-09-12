// Dependencies
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { MainLayout } from "../../../components/layouts/MainLayout";
import FileSelectSidebar from "./FileSelectSidebar";
import Sidebar from "./Sidebar";
import QuickAccess from "./QuickAccess";
import FolderList from "./FolderList";
import FileList from "./FileList";
import FileDownloadModal from "./FileDownloadModal";
import FileShareModal from "./FileShareModal";
import FolderCreateModal from "./FolderCreateModal";

// Actions
import { getAllFiles } from "../../../redux/modules/files/actions";

// Selectors
import FilePreviewModal from "./FilePreviewModal";
import { IFile } from "../../../types/index";

import { FOLDERS } from "./mockup";

// Export page
const Files = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const [file, setFile] = useState<IFile | undefined>(undefined);
  const [openFile, setOpenFile] = useState<IFile | undefined>(undefined);
  const [downloadFile, setDownloadFile] = useState<IFile | undefined>(
    undefined
  );
  const [shareFile, setShareFile] = useState<IFile | undefined>(undefined);
  const [folderCreateModalOpen, setFolderCreateModalOpen] = useState(false);

  useEffect(() => {
    dispatch(
      getAllFiles({
        success: (data: Array<IFile>) => {},
        fail: () => {
          // handle error
        },
      })
    );
  }, [dispatch]);

  const handleFileSelect = (file: IFile) => {
    setFile(file);
  };

  const handleFileOpen = (file: IFile) => {
    setOpenFile(file);
  };

  const handleDownload = (file: IFile) => {
    setDownloadFile(file);
  };

  const handleShare = (file: IFile) => {
    setShareFile(file);
  };

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    // Do something with the selected file
  };

  const handleClosePreviewModal = () => {
    setOpenFile(undefined);
  };

  const handleFolderCreate = () => {};

  return (
    <MainLayout>
      <div className="files flex bg-white">
        <Sidebar
          onUpload={handleUpload}
          onCreate={() => setFolderCreateModalOpen(true)}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {/* Quick Acces  */}
        <div
          className="leftside w-6/12 p-3"
          style={{ border: "1px solid #DBDBDB", width: "63%" }}
        >
          <QuickAccess />
          <FolderList folders={FOLDERS} />
          <FileList
            onSelect={(file: IFile) => handleFileSelect(file)}
            onOpen={(file: IFile) => handleFileOpen(file)}
            onDownload={handleDownload}
            onShare={handleShare}
          />
        </div>
        <FileSelectSidebar file={file} />
        {openFile && (
          <FilePreviewModal file={openFile} onClose={handleClosePreviewModal} />
        )}
        {downloadFile && (
          <FileDownloadModal
            file={downloadFile}
            onClose={() => setDownloadFile(undefined)}
          />
        )}
        {shareFile && (
          <FileShareModal
            file={shareFile}
            onClose={() => setShareFile(undefined)}
          />
        )}
        {folderCreateModalOpen && (
          <FolderCreateModal
            onCancel={() => setFolderCreateModalOpen(false)}
            onOK={() => setFolderCreateModalOpen(false)}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Files;
