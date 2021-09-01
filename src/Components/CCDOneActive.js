import styled from "styled-components";
import { veryDarkGrayishBlue, desaturatedDarkBlue, grayishBlue, breakPoint } from './variables';

import fb from '../images/icon-facebook.svg'
import tw from '../images/icon-twitter.svg'
import pi from '../images/icon-pinterest.svg'
// import share from '../images/icon-share.svg';

const ContentDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 20%;
justify-content: space-between;
background-color: ${veryDarkGrayishBlue};
padding: 0.8em 0 0.8em 1.7em;
@media (min-width: ${breakPoint}) {
    top: -1.2em;
    bottom: unset;
    // left: 84%;
    left: 97%;
    transform: translateX(-50%);
    right: unset;
    border-radius: 5px;
    padding: 0.4em 1.1em 0.4em 1.3em;
}
    img {
        max-width: 19.2px;
        height: auto;
    }

    > * {
        :first-child {
            display: flex;
            flex-basis: 20%;
            align-items: center;

            @media (min-width: ${breakPoint}) {
                display: none;
            }
            
            a {
                margin-bottom: -0.3em;
                font-family: monospace;
                color: red;
                font-size: calc(13rem/16);
                letter-spacing: 0.3em;
                text-decoration: none;
                color: ${desaturatedDarkBlue};
            }

        }
        :nth-child(2) {
            flex-basis: 60%;
            line-height: 0;
            display: flex;
            align-items: center;

            @media (min-width: ${breakPoint}) {
                // justify-content: space-between;
            }

            > * {
                :not(:last-child) {
                    margin-right: 1em;
                }
            }
        }
    }
`;

function ContentCardActive(props) {

    return (
        <ContentDiv className="flex" >
            <div>
                <a href="javascript:;">SHARE</a>
            </div>
            <div>
                <img src={fb} alt=""/>
                <img src={tw} alt=""/>
                <img src={pi} alt=""/>
            </div>
        </ContentDiv>
    )
}

export default ContentCardActive;