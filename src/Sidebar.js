import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import { Button, IconButton } from "@mui/material";
import SidebarOption from "./SidebarOption";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";

import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => {
          dispatch(openSendMessage());
        }}
      >
        Compose{" "}
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        Title="Inbox"
        Number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} Title="Starred" Number={21} />
      <SidebarOption Icon={AccessTimeIcon} Title="Starred" Number={21} />
      <SidebarOption Icon={LabelImportantIcon} Title="Starred" Number={21} />
      <SidebarOption Icon={NearMeIcon} Title="Starred" Number={21} />
      <SidebarOption Icon={NoteIcon} Title="Starred" Number={21} />
      <SidebarOption Icon={ExpandMoreIcon} Title="Starred" Number={21} />

      <div className="sidebar_footer">
        <div className="sidebar_footericons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
