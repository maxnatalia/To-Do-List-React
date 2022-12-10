import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.backgroundBody};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.primaryColor};
`;