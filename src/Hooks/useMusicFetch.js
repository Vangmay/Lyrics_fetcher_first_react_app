import {useState} from "react";
import {useEffect} from "react";
//const useState = require('react')

//var API = require('../config')
import API from '../config'

export const useMusicFetch = () => {
    const [searchTerm, setSearchterm] = useState('');
    const[state, setState] = useState({});
    const[musicInfo, setMusicInfo] = useState({});
    const[lyrics, setLyrics] = useState({})
    console.log("search term" + searchTerm)
    useEffect(() => {

        const musicFetch = async() =>{

            try{
                const response = await API.fetchMusic(searchTerm)
                var data = response.hits[0]
                var TITLE = response.hits[0].result.title
                var IMAGE = data.result.song_art_image_url
                var ID = data.result.id
                //console.log("Title: " , TITLE)
                //console.log("Image: " , IMAGE)
                //console.log("ID: " , ID)
                setState({
                    ...TITLE,
                    Image: IMAGE,
                    SongId: ID 
                });
                
                console.log(TITLE)
                console.log("state: "+ JSON.stringify(state))
            }catch(error){
                console.log('erro')
            };
        };
        
        const InfoFetch = async() => {
            try{
                const musicInfo = await API.InfoFetch(state.SongId)
                //console.log(musicInfo.song)
                var FULL_TITLE = JSON.stringify(musicInfo.song.full_title)
                var ALBUM = musicInfo.song.album.name
                var ALBUM_COVER_ART = musicInfo.song.album.cover_art_url
                var ARTIST = musicInfo.song.primary_artist.name
                console.log("Full title: "+ FULL_TITLE)
                console.log("ALBUM: "+ ALBUM)
                console.log("ALBUM COVERART: "+ ALBUM_COVER_ART)
                console.log("ARTIST: "+ ARTIST)
                setMusicInfo({
                    Title : FULL_TITLE,
                    Artist : ARTIST,
                    Album: ALBUM, 
                    Album_cover_art: ALBUM_COVER_ART
                })
                //console.log(FULL_TITLE)
            }catch(error){
                console.log(error)
                console.log('error')
            }
        };
        
        //InfoFetch();////////////////////[WILL FETCH FURTHER IMAGES AND DETAILS]
        
        const LyricsFetch = async() => {
            try{
                const Lyrics = await API.FetchLyrics(searchTerm,musicInfo.Artist) 
                var SONGLYRICS = Lyrics
                console.log(SONGLYRICS)
                setLyrics({
                    Lyrics:SONGLYRICS
                })
                
            }catch(error){
                console.log('error')
                console.log(error)
            }
        }

        musicFetch()
        InfoFetch()
        LyricsFetch()

    },[searchTerm,musicInfo.Artist,state.songId]);

    return{state,lyrics,musicInfo,setSearchterm};

};