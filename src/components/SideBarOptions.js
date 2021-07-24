import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoomId } from "../features/appSlice";
const SideBarOptions = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  // function
  const addChannel = (e) => {
    e.preventDefault();
    const channelName = prompt("masukkan nama grup anda");
    if (channelName) {
      db.collection("rooms").add({ name: channelName });
    }
  };
  const selectChannel = (e) => {
    e.preventDefault();
    dispatch(
      enterRoomId({
        roomId: id,
      })
    );
  };
  return (
    <SideBarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SideBarOptionsContainer>
  );
};

export default SideBarOptions;

const SideBarOptionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 0 10px;
  font-weight: 300;
`;
