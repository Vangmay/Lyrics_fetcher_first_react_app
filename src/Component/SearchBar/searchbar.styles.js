import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items:center;
    height:100px;
    background:var(darkgrey);
    padding:0 20px;
`;

export const Content = styled.div`
    position:absolute;
    bottom:20px;
    max-width:1600px;
    width:100%;
    height:55px;
    border:solid 3px black;
    border-radius:25px;
    border-radius:40px;
    color:var(#111111);

    
    input{
        font-size:var(50px);
        position:absolute;
        left:0;
        margin:8px 0;
        padding:0 0 0 20px;
        border:0;
        width:95%;
        background:transparent;
        height:40px;
        color:#ececec;
        :focus{
            outline:none;
        }
    }
`;