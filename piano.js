const WHITE=['s','d','f','g','h','j','k'];
const BLACK=['e','r','z','u','i'];
let keys=document.querySelectorAll('.key');
let blackKeys=document.querySelectorAll('.key.black');
let whiteKeys=document.querySelectorAll('.key.white');
let piano = document.getElementById("piano");

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
    audio.currentTime=0;
    audio.play();
}