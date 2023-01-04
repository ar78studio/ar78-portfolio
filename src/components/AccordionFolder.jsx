import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const Folder = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  /* background-color: var(--spring-green); */
`;

const FolderTitle = styled.div`
  padding: 20px;
  font-weight: normal;
  font-family: var(--font-family-roboto);
  cursor: pointer;

  &:hover {
    color: var(--sunset-orange);
  }
`;

const FolderContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--spring-green);
  border-radius: 4px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
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
