import { Wrapper, Button, StyledHeader } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";

const Header = ({ title }) => {
    const isDarkTheme = useSelector(selectDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <StyledHeader>
                {title}
            </StyledHeader>
            <Button onClick={() => dispatch(toggleTheme())}>
                {isDarkTheme ? "Jasny motyw" : "Ciemny motyw"}
            </Button>
        </Wrapper>
    )
};

export default Header;