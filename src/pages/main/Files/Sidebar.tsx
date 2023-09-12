import React, { useState, useEffect } from "react";
import homeIcon from "../../../components/Assets/Home_light.svg";
import groupIcon from "../../../components/Assets/Group_light.svg";
import timeIcon from "../../../components/Assets/Time_light.svg";
import starIcon from "../../../components/Assets/Star_light.svg";
import aiIcon from "../../../components/Assets/AI_light.svg";
import trashIcon from "../../../components/Assets/Trash_light.svg";
import dropIcon from "../../../components/Assets/Group 8772.svg";
import expandIcon from "../../../components/Assets/Group 8751.svg";
import folderIcon from "../../../components/Assets/Folder_fill_sm.svg";
import { Dropdown, Ripple, initTE } from "tw-elements";

type SidebarProps = {
  onUpload?: () => void;
  onCreate?: () => void;
};

const Sidebar = (props: SidebarProps) => {
  const { onUpload, onCreate } = props;

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
  };

  useEffect(() => {
    initTE({ Dropdown, Ripple });
  }, []);

  return (
    <div
      className="w-3/12 p-3"
      style={{ border: "1px solid #DBDBDB", width: "18.5%" }}
    >
      <div className="dropdown mb-5" data-te-dropdown-ref>
        <button
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="text-white button-primary-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-52 text-1xl"
          type="button"
        >
          <b> ADD NEW </b>
          <svg
            className="w-2.5 h-2.5 ml-2.5 ms-20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 absolute"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-blue-500"
                onClick={onUpload}
              >
                Upload Files
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-blue-500"
                onClick={onCreate}
              >
                Create Folder
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Side Bar */}

      <div className="sidebar flex flex-col justify-center items-start ms-1 mb-4">
        <div className="home flex items-center gap-1">
          <img src={homeIcon} className="w-6 h-6" alt="" />

          <a href="#" className="home-buttons text-gray-darker text-sm">
            Home
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <img src={groupIcon} className="w-6 h-6" alt="" />

          <a href="#" className="home-buttons text-gray-darker text-sm">
            Shared Files
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <div className="w-6 h-6">
            <img src={timeIcon} alt="" />
          </div>
          <a href="#" className="home-buttons text-gray-darker text-sm">
            Recent
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <div className="w-6 h-6">
            <img src={starIcon} alt="" />
          </div>

          <a href="#" className="home-buttons text-gray-darker text-sm">
            Starred
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <div className="w-6 h-6">
            <img src={aiIcon} className="w-4 h-4 ml-1 mt-1" alt="" />
          </div>

          <a href="#" className="home-buttons text-gray-darker text-sm">
            Tagged Files
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <img src={trashIcon} className="w-6 h-6" alt="" />

          <a href="#" className="home-buttons text-gray-darker text-sm">
            Trash
          </a>
        </div>
      </div>

      {/* Folders */}
      <h1 className="mb-4 pb-2" style={{ borderBottom: "1px solid #B3B3B3" }}>
        <b>Folders</b>
      </h1>
      <div className="sidebar flex flex-col justify-center ms-3 mb-1">
        <div className="home flex items-center gap-1">
          <img src={expandIcon} width="8" height="15" alt="" />
          <img src={folderIcon} width="24" height="30" alt="" />

          <a href="#" className="folder-button text-gray-darker text-sm">
            My Files
          </a>
        </div>
        <div className="home flex items-center gap-1">
          <img src={expandIcon} width="8" height="15" alt="" />
          <img src={folderIcon} width="24" height="30" alt="" />

          <a href="#" className="folder-button text-gray-darker text-sm">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
