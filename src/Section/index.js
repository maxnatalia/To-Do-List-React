import { MainSection, Header, Title } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <MainSection>
        <Header>
            <Title>{title}</Title>
            {extraContent}
        </Header>
        {body}
    </MainSection>
);

export default Section;