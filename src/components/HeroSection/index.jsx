import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonEle';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroEle';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to my React Website Portfolio.</HeroH1>
                <HeroP>This is Junhyeok Kim, who wants to become a front-end developer. I will do my best to become a front-end developer who is curious about what I don't know and continues to develop in accordance with the rapidly changing nature of my work.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="contact" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary="true" 
                    dark="true"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true'
                    offset={-80}
                    >
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
