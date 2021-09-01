import styled from "styled-components";
import lady from '../images/avatar-michelle.jpg';
import { lightGrayishBlue, grayishBlue, desaturatedDarkBlue } from './variables';

const ContentDiv = styled.div`
flex-basis: 80%;
`;

const ContentCardPhoto = styled.div`
flex-basis: 12%;
line-height: 0;

img {
    border-radius: 50%;
}
`;

const ContentCardName = styled.div`
padding-left: 2em;
flex-basis: 65%;
font-size: calc(13rem/16);

> * {
    :first-child {
    font-weight: 700;
    };
    :last-child {
    color: ${desaturatedDarkBlue};
    }
}
`;


function CCDOne() {

    return (
        <ContentDiv className="flex">
        <ContentCardPhoto><img src={lady} alt="Michelle Appleton Profile Photo" />
        </ContentCardPhoto>
        <ContentCardName>
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
        </ContentCardName>
        </ContentDiv>
)
}

export default CCDOne; 