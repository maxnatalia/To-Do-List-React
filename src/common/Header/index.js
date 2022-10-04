import { Wrapper, Button, StyledHeader } from "./styled";

const Header = ({ title }) => (
    <Wrapper>
        <StyledHeader>
            {title}
        </StyledHeader>
        <Button>Zmień Motyw</Button>
    </Wrapper>
);

export default Header;