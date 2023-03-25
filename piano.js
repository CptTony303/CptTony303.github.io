const WHITE=['s','d','f','g','h','j','k'];
const BLACK=['e','r','z','u','i'];
let sounds = document.getElementById('gamedrix974');
let keys=document.querySelectorAll('.key');
let blackKeys=document.querySelectorAll('.key.black');
let whiteKeys=document.querySelectorAll('.key.white');
let piano = document.getElementById('piano');

// add key soundfiles to html
for(let i=1;i<=88;i++){
    let file = document.createElement('audio');
    file.id = i;
    file.src= "music/gamedrix974/"+i+".wav";
    sounds.appendChild(file);
}
// add keys
var style = window.getComputedStyle(piano);
var amnt_white =  style.getPropertyValue('--whiteKeys');
var key_nr = style.getPropertyValue('--first');
var shift = 9;
//style.setPropertyValue('--whiteKeys', '14');
for(let i = 0; i < amnt_white; i++){
    let white = document.createElement('button');
    white.className = 'key white';
    white.dataset.note = key_nr;
    piano.appendChild(white);
    key_nr++;
    if(((key_nr-1)+shift)%12!=4 && ((key_nr-1)+shift)%12!=11){
        let black = document.createElement('button');
        black.className = 'key black';
        black.dataset.note = key_nr;
        piano.appendChild(black);
        key_nr++;
    }
}

keys = document.querySelectorAll('.key');
// eventlistener for mouse click
keys.forEach(key =>{
    key.onclick = function(e){
        playKey(key);
        e.stopPropagation();
    }
    //key.addEventListener('click',()=>playKey(key));
});
//eventlistener for key press using keydown
document.addEventListener('keydown',e=>{
let key=e.key;
let whiteKeyIndex=WHITE.indexOf(key);
let blackKeyIndex=BLACK.indexOf(key);

if(whiteKeyIndex>-1) playKey(whiteKeys[whiteKeyIndex]);
if(blackKeyIndex>-1) playKey(blackKeys[blackKeyIndex]);
});

// this function will play audio
function playKey(key){
    const audio=document.getElementById(key.dataset.note);
    key.classList.add('active');
    audio.currentTime=0;
    audio.play();
    window.setTimeout(()=>{key.classList.remove('active')}, 500);
}
