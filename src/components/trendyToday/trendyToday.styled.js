import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
    font-size: 20px;
`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
`
const ListItem = styled.li`
width: 208px;
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover { box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)}
`

const Thumb = styled.div`
    padding: 0 8px;
    margin-top: 16px;
`
const TextTitle = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const TextVote = styled.p`
font-size: 14px;
margin-top: 8px;
margin-bottom: 16px;
`

export {StyledLink, List, ListItem, TextVote, Thumb, TextTitle}