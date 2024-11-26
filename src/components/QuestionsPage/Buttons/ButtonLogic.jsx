import React from "react";
import { ButtonContainer } from "../styledComponents";

const ButtonLogic = ({ openSection, toggleSection }) => {
  const sections = [
    {
      key: "explanation",
      openIcon: "fa-solid fa-arrow-left",
      closedIcon: "fa-solid fa-book-open",
    },
    {
      key: "discussion",
      openIcon: "fa-solid fa-arrow-left",
      closedIcon: "fa-brands fa-rocketchat",
    },
    {
      key: "workspace",
      openIcon: "fa-solid fa-arrow-left",
      closedIcon: "fa-regular fa-square",
    },
    {
      key: "report",
      openIcon: "fa-solid fa-arrow-left",
      closedIcon: "fa-regular fa-flag",
    },
  ];

  const handleButtonClick = (key) => {
    toggleSection(key);
  };

  return (
    <ButtonContainer>
      {sections.map(({ key, openIcon, closedIcon }) => (
        <button
          key={key}
          onClick={() => handleButtonClick(key)}
          className={openSection === key ? "active" : ""}
        >
          <i className={openSection === key ? openIcon : closedIcon}></i>
        </button>
      ))}
    </ButtonContainer>
  );
};

export default ButtonLogic;
