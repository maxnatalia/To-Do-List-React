import { useSelector } from "react-redux";
import { selectLanguage } from "../languageSlice";
import { Nav, StyledNavLink } from "./styled";
import descriptions from "../descriptions";

const Navigation = () => {
    const language = useSelector(selectLanguage);

    return (
        <Nav>
            <StyledNavLink to="/zadania">
                {descriptions[language].tasksPageTitle}
            </StyledNavLink>

            <StyledNavLink to="/autor">
                {descriptions[language].authorPageTitle}
            </StyledNavLink>
            <StyledNavLink to="/info">
                O aplikacji
            </StyledNavLink>
        </Nav>
    )
}

export default Navigation;

