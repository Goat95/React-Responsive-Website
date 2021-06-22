import styled from 'styled-components';

export const AboutContainer = styled.div`
    background-color: #000;
`;

export const AboutWrap = styled.div`
    padding: 200px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
`;

export const AboutContent = styled.div`
    width: 50%;
`;

export const AboutH1 = styled.h1`
    color: #fff;
    font-size: 8vw;
    text-align: center;
    padding-top: 200px;
    font-family: 'Staatliches', cursive;
`;

export const AboutH2 = styled.h2`
    color: #01bf71;
    font-size: 3vw;
    font-family: 'Staatliches', cursive;
`;

export const AboutP = styled.p`
    color: #fff;
    font-size: 1vw;
    width: 90%;
    margin-bottom: 100px;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const ImgWrap = styled.div`
    width: 50%
`;

export const Img = styled.img`
    width: 100%;
    height: 100vh;
`;

export const SkillContainer = styled.div`
    background-color: #fff;
`;

export const SkillWrap = styled.div`
    padding: 200px 0;
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SkillH1 = styled.h1`
    color: #000;
    font-size: 8vw;
    padding-top: 200px;
    text-align: center;
    font-family: 'Staatliches', cursive;
`;

export const SkillImg = styled.img`
    width: 40%;
    height: 100%;
`;

export const SkillBox = styled.div`
    width: 60%;
    height: 36vw;
    border-radius: 1vw;
    border: 0.05vw solid #000;
    padding: 4vw;
    position: relative;
`;

export const SkillH2 = styled.h2`
    position: relative;
    color: #000;
    font-size: 3vw;
    font-family: 'Staatliches', cursive;
`;

export const SkillDesc = styled.div`
`;

export const Skill = styled.p`
    position: relative;
    display: inline-block;
    font-size: 1.8vw;
    width: 90%;
    margin-top: 50px;

    :after {
        content: '';
        width: 112%;
        position: absolute;
        bottom: 0;
        left: 0%;
        border-bottom: 1px solid #000;
    }
`;
export const SkillPer = styled.p`
    display: inline-block;
    font-size: 1.5vw;
    width: 10%;
`;