import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const roomId = useSelector((state) => state.appGlobal.roomId);
  const [input, setInput] = useState("");
  const pressButton = (e) => {
    e.preventDefault();
    if (!channelId) return false;
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <ContainerChatInput>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`message #Room`}
        />
        <Button onClick={pressButton}>Send</Button>
      </form>
    </ContainerChatInput>
  );
};

export default ChatInput;

const ContainerChatInput = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
