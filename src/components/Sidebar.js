import React from "react";
import styled from "styled-components";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import SideBarOptions from "./SideBarOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Dedy</h2>
          <h3>
            <FiberManualRecord />
            deddy
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SideBarOptions Icon={InsertComment} title="Thread" />
      <SideBarOptions Icon={Inbox} title="Mentions & Reactions" />
      <SideBarOptions Icon={Drafts} title="Saved items" />
      <SideBarOptions Icon={BookmarkBorder} title="Channel Browser" />
      <SideBarOptions Icon={PeopleAlt} title="People & User groups" />
      <SideBarOptions Icon={Apps} title="Apps" />
      <SideBarOptions Icon={FileCopy} title="File Browser" />
      <SideBarOptions Icon={ExpandLess} title="Show Less" />
      <hr />
      <SideBarOptions Icon={ExpandMore} title="Channel" />
      <SideBarOptions Icon={Add} title="Add Channel" addChannelOption />
      {channels?.docs.map((doc) => (
        <SideBarOptions
          key={doc.id}
          id={doc.id}
          Icon={Add}
          title={doc.data().name}
        />
      ))}
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #29274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49374b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
