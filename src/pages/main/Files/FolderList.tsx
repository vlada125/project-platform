import { useState } from "react";
import folderIcon from "../../../components/Assets/Folder_fill.svg";
import { FOLDERS } from "./mockup";
import { IFolder } from "../../../types/index";

type FolderListProps = {
  folders: IFolder[];
};

const FolderList = (props: FolderListProps) => {
  const { folders } = props;
  const [selectedId, sestSelectedId] = useState<number>();

  const handleClick = (index: number) => {
    sestSelectedId(index);
  };

  return (
    <>
      <h2 className="folder text-xl my-4">
        <b>Folders</b>
      </h2>
      <div className="flex items-center gap-4 mb-2">
        {folders.map((folder, index) => (
          <div
            className="folder w-[13%] min-w-[150px] border border-#aba4a4 rounded rounded-10 flex-col justify-center hover:border-blue-400"
            key={`folder-item-${index}`}
            onClick={() => handleClick(index)}
          >
            <img src={folderIcon} width="64" height="64" alt="" />
            <div className={index === selectedId ? "bg-blue-400" : ""}>
              <span className="quic-acess-file ps-2">
                <b>{folder.name}</b>
              </span>
              <h6
                className="quic-acess-file ps-2 py-1"
                style={{ fontSize: "9px" }}
              >
                Last Modified {folder.lastModifiedAt}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FolderList;
