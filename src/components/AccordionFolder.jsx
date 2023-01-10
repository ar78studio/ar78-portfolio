import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
  position: relative;
  background-color: var(--sunset-orange);
  border-radius: 4px;

  @media (max-width: 480px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    place-self: center;
  }

  &:last-child {
    margin-bottom: 5em;
  }
`;

const FolderTitle = styled.div`
  padding: 0.7em 1em;
  font-weight: 400;
  font-family: var(--font-family-roboto);
  cursor: pointer;

  &:hover {
    color: var(--light-beige);
  }

  @media (max-width: 480px) {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;

const FolderContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--spring-green);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  &:first-child {
    display: ${(props) => (props.isOpen ? "block" : "block")};
  }
`;

function AccordionFolder({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Folder>
      <FolderTitle onClick={() => setIsOpen(!isOpen)}>{title}</FolderTitle>
      <FolderContent isOpen={isOpen}>{children}</FolderContent>
    </Folder>
  );
}

export default AccordionFolder;
