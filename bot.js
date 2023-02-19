const axios = require('axios');
const MPlayer = require('mplayer');
const player = require('play-sound')();

var urlS = "https://grocerysupportpickup.youcanbook.me/";
//var url2 = "https://web.whatsapp.com/";
//var url3 = "https://www.youtube.com/";
var urlT = "https://grocerysupportecards.youcanbook.me/";
var url2 = "https://rpantry.youcanbook.me/";

function monitorChange(){
axios.get(urlT).then((res)=>{
    if(res.data.includes('This means it')){
        console.log('Unavailable');
    }else{
        player.play('C:/Users/EndUser/Desktop/staterBrosBot/audio.mp3');
        console.log('TakeIt!');
    }
})
}

setInterval(monitorChange, 5000);
console.log('Starting');