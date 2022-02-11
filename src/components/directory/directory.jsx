import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { DirectoryMenuContainer } from "./directory.styles";
import MenuItem from "../menuItems/menuItems";

const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />
      })}
    </DirectoryMenuContainer>
  );
};


export default Directory;
