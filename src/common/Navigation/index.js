import { Nav, StyledNavLink } from "./styled";

const Navigation = () => {
    return (
        <Nav>
            <StyledNavLink to="/zadania">
                Zadania
            </StyledNavLink>

            <StyledNavLink to="/autor">
                O autorze
            </StyledNavLink>
        </Nav>
    )
}

export default Navigation;

