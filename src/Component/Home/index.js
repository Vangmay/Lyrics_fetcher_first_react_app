import React from 'react'


//SIMP WORTHY DATA FUNCTIONS



import {Content,Wrapper} from './Home.styles'
const Song = ({Header, Children, Album,Img}) => (
    <Wrapper>
        <Content>
            <h1>{ Header }</h1>
            <h1>{Album}</h1>
            <p> { Children }</p>
            <img src = {Img}></img>
        </Content>
    </Wrapper>
);

export default Song;