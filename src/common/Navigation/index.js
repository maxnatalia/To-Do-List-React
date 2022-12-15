import { useSelector } from "react-redux";
import { useState } from "react";
import { Nav, StyledNavLink, MenuBars, MenuClose, NavMenu, MobileMenu, Container } from "./styled";
import { selectLanguage } from "../language/languageSlice";
import descriptions from "../language/descriptions";

const Navigation = () => {
    const [show, setShow] = useState(false);
    const language = useSelector(selectLanguage);

    const handleClick = () => {
        setShow(!show)
    };

    return (
        <Nav>
            <Container>
                <MobileMenu onClick={handleClick}>
                    {show ? <MenuClose /> : <MenuBars />}
                </MobileMenu>
                <NavMenu show={show}>
                    <StyledNavLink to="/zadania">
                        {descriptions[language].tasksPageTitle}
                    </StyledNavLink>

                    <StyledNavLink to="/autor">
                        {descriptions[language].authorPageTitle}
                    </StyledNavLink>
                    <StyledNavLink to="/info">
                        {descriptions[language].titleInfoApp}
                    </StyledNavLink>
                </NavMenu>
            </Container>
        </Nav>
    )
};

export default Navigation;

