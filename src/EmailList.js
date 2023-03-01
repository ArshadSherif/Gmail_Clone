import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Checkbox, IconButton } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";

import React, { useEffect, useState } from "react";
import "./EmailList.css";
import InboxIcon from "@mui/icons-material/Inbox";
import { db } from "./firebase";
function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("email")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" colour="red" selected />
        <Section Icon={PeopleIcon} title="Social" colour="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" colour="green" />
      </div>
      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Hey New User"
          subject="Welcome to Gmail"
          description="Congratulations on creating your brand new Gmail address.
        Please keep this email for your records, as it contains an
important verification code that you may need should you ever
encounter problems or forget your password 
"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
