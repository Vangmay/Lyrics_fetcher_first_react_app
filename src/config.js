var api = require('genius-api');
var getLyrics = require('genius-lyrics-api/lib/getLyrics');

var genius = new api('ic5BXtCe9dTJdnc0-tU4unafdRArTIeJe_bBJGBNEQ06N-OlC_FKEwF54EgCfdkW')

/*genius.search('Blinding lights').then(function(response){
    //console.log("hits ", response);
    var data = response.hits[0]
    var TITLE = response.hits[0].result.title
    var IMAGE = data.result.song_art_image_url
    var ID = data.result.id
});*/




const apisettings = {
    fetchMusic: async (searchTerm) => {
        return await( genius.search(searchTerm));
    },

    InfoFetch: async(searchTerm) => {
        return await(genius.song(searchTerm));
    },

    FetchLyrics: async(searchTerm,Artist) => {
        const options = {
            apiKey: 'ic5BXtCe9dTJdnc0-tU4unafdRArTIeJe_bBJGBNEQ06N-OlC_FKEwF54EgCfdkW',
            title: searchTerm,
            artist: Artist,
        }
        return await ( getLyrics(options))
    }
}

//apisettings.FetchLyrics('Blinding Lights', "The weeknd")
export default apisettings;
//export default apiSettings;

/*
const musicFetch = async(searchTerm) =>{

    try{
        const response = await apisettings.fetchMusic(searchTerm)
        var data = response.hits[0]
        var TITLE = response.hits[0].result.title
        var IMAGE = data.result.song_art_image_url
        var ID = data.result.id
        //console.log("Title: " , TITLE)
        //console.log("Image: " , IMAGE)
        //console.log("ID: " , ID)
        console.log(ID)
        return await(data)
    }catch(error){
        console.log('erro')
    };
};
//musicFetch('Blinding Lights')

const InfoFetch = async(searchTerm) => {
    try{
        const musicInfo = await apisettings.InfoFetch(searchTerm)
        //console.log(musicInfo.song)
        var FULL_TITLE = musicInfo.song.full_title
        var ALBUM = musicInfo.song.album.name
        var ALBUM_COVER_ART = musicInfo.song.album.cover_art_url
        var ARTIST = musicInfo.song.primary_artist.name
        //console.log(FULL_TITLE)
    }catch(error){
        console.log(error)
        console.log('error')
    }
};
InfoFetch(5049949)
//InfoFetch();////////////////////[WILL FETCH FURTHER IMAGES AND DETAILS]

const LyricsFetch = async() => {
    try{
        const Lyrics = await apisettings.FetchLyrics('blinding lights','The weeknd') 
        var SONGLYRICS = JSON.stringify(Lyrics)
        return await (Lyrics);
        
    }catch(error){
        console.log('error')
        console.log(error)
    }
}

//lyrics = LyricsFetch();
//console.log(lyrics)      //////LyricsFetch{Will fetch only lyrics(supply name and artist(use other functions if possible))}
//*/