import { Wrapper, Button, StyledHeader, ButtonWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { changeLanguage, selectLanguage } from "../languageSlice";
import descriptions from "../descriptions";
import { useState } from "react";

const Header = ({ title }) => {
    const isDarkTheme = useSelector(selectDarkTheme);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    const [active, setActive] = useState("PL");

    const handleClick = (key) => {
        dispatch(changeLanguage(key));
        setActive(key);
    };

    return (
        <Wrapper>
            <StyledHeader>
                {title}
            </StyledHeader>
            <ButtonWrapper>
                {Object.keys(descriptions).map((key) => (
                    <Button
                        lang="true"
                        key={key}
                        value={key}
                        active={key === active}
                        onClick={() => {handleClick(key)}}
                    >
                        {key}
                    </Button>
                ))}
            </ButtonWrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                {isDarkTheme ? descriptions[language].themeLight : descriptions[language].themeDark}
            </Button>
        </Wrapper >
    )
};

export default Header;