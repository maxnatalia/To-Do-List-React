import { StyledSection, Header, Title } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraContent}
        </Header>
        {body}
    </StyledSection>
);

export default Section;