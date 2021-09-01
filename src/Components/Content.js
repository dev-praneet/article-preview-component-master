import styled from 'styled-components';
import { useState } from 'react';
import ContentCard from './ContentCard';
import CCContainer from './CCContainer';
import { lightGrayishBlue, grayishBlue, desaturatedDarkBlue, veryDarkGrayishBlue } from './variables';

const ContentDiv = styled.div`
max-width: 80%;
margin: 0 auto;
padding: 1.7em 0em 0em 0em;
text-align: left;
`;

const ContentHead = styled.h2`
font-weight: 700;
`;

const ContentText = styled.p`
margin: 1em 0;
font-size: calc(13rem/16);
font-weight: 500;
color: ${desaturatedDarkBlue};
line-height: 1.6;
`;

function Content() {

    const [cardActive, setCardActive] = useState(false);

    function changeCardActive() {
        console.log("This function was called.")
        setCardActive(prevState => !prevState);
 
    }
    return (
        <div>
            <ContentDiv>
                <ContentHead>
                Shift the overall look and feel by adding these wonderful touches to furniture in your home
                </ContentHead>
                <ContentText>
                Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
                </ContentText>
            </ContentDiv>
                <CCContainer changeCardActive={changeCardActive} cardActive={cardActive}/>
        </div>
    )
} 

export default Content;