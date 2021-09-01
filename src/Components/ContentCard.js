import styled, { withTheme } from 'styled-components';
import CCDOne from './CCDOne';
import CCDOneActive from './CCDOneActive';
// import share from './images/icon-share.svg';
import { ReactComponent as Share } from '../images/icon-share.svg';
import { lightGrayishBlue, grayishBlue, desaturatedDarkBlue, veryDarkGrayishBlue } from './variables';

const ContentCardDiv = styled.div`
position: relative;
max-width: 80%;
margin: 0 auto;
padding: 0.5em 0;
justify-content: space-between;
align-items: center;
`;


const CCDTwo = styled.div`
flex-basis: 20%;
`;



const ContentCardShare = styled.div`
display: flex;
margin-left: auto;
height: 1.7em;
width: 1.7em;
text-align: center;
background-color: ${lightGrayishBlue};
border-radius: 50%;
background-color: ${props => props.cardActive ? desaturatedDarkBlue : null};
`;


function ContentCard(props) {

    return (
                <ContentCardDiv className="flex" >
                    <CCDOne/>
                    {props.cardActive && <CCDOneActive/>}
                    <CCDTwo>
                        <ContentCardShare cardActive={props.cardActive}>
                            <Share fill={props.cardActive ? "white" : "#6E8098"} style={{margin: "auto",}} alt="share" onClick={props.changeCardActive}/>
                        </ContentCardShare>
                    </CCDTwo>
                </ContentCardDiv>
    )
}

export default ContentCard;