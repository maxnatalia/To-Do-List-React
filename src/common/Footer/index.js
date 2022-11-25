import { StyledFooter, ContainerAbout, ContainerAddress, WrapperIcon, IconLink, LinkEmail } from "./styled";
import { ReactComponent as GithubIcon } from "./gitHub.svg";
import { ReactComponent as LinkedInIcon } from "./linkedIn.svg";

const Footer = () => {
    return (
        <StyledFooter>
            <ContainerAddress>
                <LinkEmail
                    title="nataliamazur1988@gmail.com"
                    href="mailto:nataliamazur1988@gmail.com"
                >
                    nataliamazur1988@gmail.com
                </LinkEmail>
                <WrapperIcon>
                    <IconLink target="_blank" href="https://github.com/maxnatalia" title="Github"><GithubIcon /></IconLink>
                    <IconLink target="_blank" href="https://www.linkedin.com/in/natalia-mazur-%C5%BCurek-136a35254/" title="LinkedIn"><LinkedInIcon /></IconLink>
                </WrapperIcon>
            </ContainerAddress>
            <ContainerAbout>
                Natalia Mazur-Żurek &copy; 2022
            </ContainerAbout>
        </StyledFooter>
    )
};

export default Footer;