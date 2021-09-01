import { props } from 'bluebird';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import { lightGrayishBlue, grayishBlue, desaturatedDarkBlue, veryDarkGrayishBlue } from './variables';

const CCDWrapper = styled.div`
background-color: ${props => props.cardActive ? veryDarkGrayishBlue : null};
@media (min-width: 900px) {
    background-color: white;
}
`;

function CCDContainer(props) {
    return (
        <CCDWrapper cardActive={props.cardActive}>
            <ContentCard changeCardActive={props.changeCardActive} cardActive={props.cardActive}/>
        </CCDWrapper>
    )
}

export default CCDContainer;