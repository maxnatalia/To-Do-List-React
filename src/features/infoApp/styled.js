import styled from "styled-components";

export const ContainerTools = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const ToolWrapper = styled.div`
    padding: 20px;
    border: 1px solid teal;
    border-radius: 15px;
    text-align: center;
    background-color: teal;
    color: white;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const ToolList = styled.ul`
    list-style: none;
    padding: 0;
    font-weight: 600;
`;

export const ToolItem = styled.li`
    font-weight: 400;
`;

export const ToolIcon = styled.img`
    width: 60px;
    height: auto;
`;