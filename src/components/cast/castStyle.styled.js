import styled from 'styled-components';

const CastThumb = styled.div` 
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: aliceblue;
`

const ThumbImage = styled.div`
    display: block;
    color: red;
    width: 150;
    height: 225px;
    border: 1px solid black;
`

const ListOfActors = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`
const ListOfActorsItems = styled.li`
    width: 150px;
    text-align: center;
`
const ActorsName = styled.p`
    padding-top: 12px;
    padding-bottom: 12px;
`
export { ThumbImage, CastThumb, ListOfActors, ListOfActorsItems, ActorsName };
