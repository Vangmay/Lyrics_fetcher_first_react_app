import React,{useState, useEffect, useRef} from 'react'

import { Wrapper,Content }from './searchbar.styles'

const SearchBar = ({setSearchTerm}) => {
    const [state,setState] = useState('');
    const initial = useRef(true);

    useEffect(()=>{
        if(initial.current){
            initial.current = false; 
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500);

        return () => clearTimeout(timer)
    },[setSearchTerm,state])

    return(
        <Wrapper>
            <Content>
                <input type='text' 
                placeholder = 'Search Song' 
                onChange = {event => setState(event.currentTarget.value)} 
                value={state}/>
            </Content>
        </Wrapper>
    );
};
export default SearchBar