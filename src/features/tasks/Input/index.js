import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.color.silver};
    background-color: ${({ theme }) => theme.color.whisper};
    border-radius: 5px;
`;