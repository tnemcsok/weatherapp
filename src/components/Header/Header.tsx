import React from "react";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import {
  GithubLink,
  HeaderContainer,
  Title,
  HeaderIconsContainer,
} from "./Headerstyle";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";
import { AppStore } from "../../store/store";
import { toggleDarkMode } from "../../store/reducers/appReducer";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <HeaderContainer>
      <Title>WeatherApp</Title>
      <HeaderIconsContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
        <GithubLink href="http://www.github.com/tnemcsok/weatherapp">
          <GithubIcon />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;