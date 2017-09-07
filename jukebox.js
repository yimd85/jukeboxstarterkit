var audio = document.getElementById('playa');
var list = document.getElementById('playlist');

//Constructor function for jukebox
function JukeBox(audioObj) {
    this.audioObj = audioObj;
    this.songList = [];

    this.load = function (song) {
        this.songList.push(song);
        let songId = this.songList.indexOf(song);
        list.innerHTML += `<li id=${songId}>${song.slice(8)}</li>`;
        audioObj.src = song;
    }
};

JukeBox.prototype.play = function(){
  this.audioObj.play();
}

JukeBox.prototype.pause = function(){
  this.audioObj.pause();
}

JukeBox.prototype.stop = function() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
}

//this is my Jukebox
var myJukeBox = new JukeBox(audio);
var button = document.getElementById('button');
myJukeBox.load('./Music/The_Glass_Child_Sister.mp3');
myJukeBox.load('./Music/Michael_Ellis_Summer.mp3');
myJukeBox.load('./Music/Explosive_Ear_Candy.mp3');

button.addEventListener('click', function(event) {
    let button = event.target.id;
    if (button === 'play') {
        myJukeBox.play();
      }else if(button === 'pause') {
          myJukeBox.pause();
        }else if(button === 'stop') {
            myJukeBox.stop();
          }else if(button === 'load') {
              myJukeBox.load('./Music/All_or_nothing.mp3')
            }
})

//click to play
list.addEventListener('click', function(){
    let song = event.target.id;
    myJukeBox.audioObj.src = myJukeBox.songList[song];
    myJukeBox.play();
})

//shuffle button//
var list = document.getElementById('playlist'),
button = document.getElementById('shuffle');
function shuffle(items){
  var cached = items.slice(0), temp, i = cached.length, rand;
  while(--i){
    rand = Math.floor(i * Math.random());
    temp = cached[rand];
    cached[rand] = cached[i];
    cached[i] = temp;
}
  return cached;
}
  function shuffleNodes(){
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length)
{
  list.appendChild(nodes[i]);
  ++i;
}}

button.onclick=shuffleNodes;
