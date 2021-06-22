import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterEle';
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterEle';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }; 

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">Name</FooterLink>
                                <FooterLink to="/">Description</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Skill</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Website</FooterLinkTitle>
                                <FooterLink to="/">BLOOGER</FooterLink>
                                <FooterLink to="/">RESPONSIVE</FooterLink>
                                <FooterLink to="/">MEGABOX</FooterLink>
                                <FooterLink to="/">FOLEX</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Animation</FooterLinkTitle>
                                <FooterLink to="/">Tail Animation</FooterLink>
                                <FooterLink to="/">Cube Animation</FooterLink>
                                <FooterLink to="/">Wave Animation</FooterLink>
                                <FooterLink to="/">Bar Animation</FooterLink>
                                <FooterLink to="/">SVG Animation</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Script</FooterLinkTitle>
                                <FooterLink to="/">Todo List</FooterLink>
                                <FooterLink to="/">Weather App</FooterLink>
                                <FooterLink to="/">Paint Board</FooterLink>
                                <FooterLink to="/">Parallax</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="/">Address</FooterLink>
                                <FooterLink to="/">Phone Number</FooterLink>
                                <FooterLink to="/">Email</FooterLink>
                                <FooterLink to="/">Email Form</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Portfolio
                        </SocialLogo>
                        <WebsiteRights>JunHyeok @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
