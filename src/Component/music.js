import React from 'react'

//Hooks
import { useMusicFetch } from '../Hooks/useMusicFetch'

//Components
import Song from './Home'
import SearchBar from './SearchBar'


const Music = () => {
    const{state,lyrics,musicInfo,setSearchterm} = useMusicFetch();
    //console.log("State: "+ state)
    //console.log("Info: "+ musicInfo)
    console.log("lyrics "+ lyrics.Lyrics)
    console.log("stateTITLE "+state.Title)
    return(
    <>
        
        <Song Header = {musicInfo.Title} Album = {musicInfo.Album} Children = {lyrics.Lyrics} Img = {state.Image}></Song>
        <SearchBar setSearchTerm = {setSearchterm}/>
    </>
    )
}

export default Music