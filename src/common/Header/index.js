import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Wrapper, Button, StyledHeader, ButtonWrapper } from "./styled";
import { selectDarkTheme, toggleTheme } from "../theme/themeSlice";
import { changeLanguage, selectLanguage } from "../language/languageSlice";
import descriptions from "../language/descriptions";

const Header = ({ title }) => {
    const isDarkTheme = useSelector(selectDarkTheme);
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    const [active, setActive] = useState(language);

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
                        onClick={() => {
                            dispatch(changeLanguage(key));
                            setActive(key);
                        }}
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