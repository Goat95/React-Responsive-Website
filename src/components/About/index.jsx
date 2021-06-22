import React from 'react';
import { AboutContainer, AboutWrap, AboutContent, AboutH1, AboutH2, AboutP, ImgWrap, Img, SkillContainer, SkillH1, SkillWrap, SkillImg, SkillBox, SkillH2, SkillDesc, Skill, SkillPer } from './AboutEle';
import NavBar from '../Navbar';
import Footer from '../Footer';
import img from '../../images/me1.jpg';
import img2 from '../../images/skill.svg';
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <AboutContainer>
                <AboutH1>About Me</AboutH1>
                <AboutWrap>
                    <AboutContent>
                        <AboutH2>Goal</AboutH2>
                        <AboutP>안녕하세요. 프론트 엔드 개발자가 되고 싶은 김준혁입니다. 빠르게 변화하는 업무 특성에 맞게 모르는 것에 호기심을 갖고, 찾아가며 계속해서 발전하는 프론트 엔드 개발자가 되도록 노력하겠습니다.</AboutP>
                        <AboutH2>Concentration</AboutH2>
                        <AboutP>무슨 일이든 시작하면 몰입감을 가지고 일을 완수하고자 합니다. 코딩을 하면서 문제에 직면했을때 문제에 몰입하여 몇시간이고 시도를 하여 가능을 이끌어 내고자 합니다.</AboutP>
                        <AboutH2>Experience</AboutH2>
                        <AboutP>저는 소프트웨어 학과에서 팀 프로젝트 경험을 하면서 누구나 알기 쉽게 코드를 명확하고 깔끔하게 짜야 한다는 것을 배웠고, 팬데믹이 겹치면서 팀 프로젝트에서 서로에 의견을 하나로 합치는 것이 힘들었는데 가상회의를 통해 의견이 합쳐 지면서 좋은 결과물을 만들어 혁신원장상을 받은 경험이 있습니다.</AboutP>
                    </AboutContent>
                    <ImgWrap>
                        <Img src={img} alt="me"></Img>
                    </ImgWrap>
                </AboutWrap>
            </AboutContainer>
            <SkillContainer>
                <SkillH1>Skills</SkillH1>
                <SkillWrap>
                    <SkillImg src={img2} alt="skill"></SkillImg>
                    <SkillBox>
                        <SkillH2>I Can handle these skills.</SkillH2>
                        <SkillDesc>
                            <Skill><FaHtml5 />HTML</Skill><SkillPer>90%</SkillPer>
                            <Skill><FaCss3 />CSS</Skill><SkillPer>90%</SkillPer>
                            <Skill><FaJs />JAVASCRIPT</Skill><SkillPer>70%</SkillPer>
                            <Skill><FaReact />REACT</Skill><SkillPer>60%</SkillPer>
                        </SkillDesc>
                    </SkillBox>
                </SkillWrap>
            </SkillContainer>
            <Footer />
        </>
    )
}

export default AboutPage;