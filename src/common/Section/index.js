import { StyledSection, Header, Title, Wrapper } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraContent}
        </Header>
        <Wrapper>
            {body}
        </Wrapper>
    </StyledSection>
);

export default Section;