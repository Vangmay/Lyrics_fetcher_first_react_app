import styled  from "styled-components";

//Importing simp-worthy data


export const Wrapper = styled.div`
    background-color: #63d471;
    background-image: linear-gradient(180deg, #63d471 0%, #233329 74%);
    padding:20px 20px;
   
`; 




export const Content = styled.div`
    background-color: #63d471;
    background-image: linear-gradient(180deg, #63d471 0%, #233329 74%);
    *{
        overflow:none;
    }
    
    width:100%;
    h1{
        position:relative;
        top:120px;
        left:40px;
        font-size:1.2rem;
    }
    p{
        position:relative;
        top:120px;
        left:40px;
        font-size:0.9rem;
        width:400px;
        height:600px;
        background:#00000022;
        border-radius:25px;
        padding:10px 10px 10px 10px;
        overflow-y:scroll;
        overflow-x:hidden;
        ::-webkit-scrollbar {
            width: 0.25rem;
            height:025rem;
            border-radius:5px
        };
        
        ::-webkit-scrollbar-track {
            background:transparent;
        };
        
        ::-webkit-scrollbar-thumb {
            background: #6649b8;
        };
        
          
    
          
    }
    img{
        position:relative;
        bottom:550px;
        left:850px;
        width:600px;
        height:600px;
    }

`; 

