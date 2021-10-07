function init(){ 
  fetch('https://api.imgflip.com/get_memes')
  .then(resp => resp.json())
  .then(json =>  loadMemesName(json.data.memes))
}
const memeList = document.querySelector('#meme-list');
const memeContainer = document.getElementById('meme');

const randomMemeBtn = document.createElement('button')
randomMemeBtn.id = 'random-meme';
const memeListHolder = document.querySelector('#meme-list-holder')
randomMemeBtn.innerHTML = "Generate Random Meme!"
memeListHolder.appendChild(randomMemeBtn)
randomMemeBtn.addEventListener('click', randomMeme)

function loadMemesName(memes) {
  memes.forEach(memes => {
    const aList = document.createElement("a");
    const li = document.createElement('li');
    const likeBtn = document.createElement('button');
    const likeCounter = document.createElement('h5');
    let likeNum = document.createElement('h5');
    const dislikeBtn = document.createElement('button');
    const dislikeCounter = document.createElement('h5');
    let dislikeNum = document.createElement('h5');
    
    likeBtn.innerHTML = "🤣"
    likeBtn.id = 'like-btn';
    likeCounter.innerHTML = "Laughs: "
    likeCounter.id = 'like-counter';
    likeNum.id = 'like-num';
    likeNum.innerHTML = 0

    dislikeBtn.innerHTML = " 👎 " 
    dislikeBtn.id = 'dislike-btn';
    dislikeCounter.innerHTML = "Boos: "
    dislikeCounter.id = 'dislike-counter';
    dislikeNum.id = 'dislike-num'
    dislikeNum.innerHTML = 0

    aList.innerHTML = memes.name
    aList.id = memes.url
    aList.setAttribute('href', `#`)
    
    li.appendChild(aList);
    li.appendChild(likeBtn);
    li.appendChild(likeCounter);
    likeCounter.appendChild(likeNum);
    li.appendChild(dislikeBtn);
    li.appendChild(dislikeCounter);
    dislikeCounter.appendChild(dislikeNum);
    memeList.append(li)
    
    aList.addEventListener('click' , () => displayMemes(aList.id))
    likeBtn.addEventListener('click', () => likeNum.innerHTML++)
    dislikeBtn.addEventListener('click', () => dislikeNum.innerHTML++)
  })
};

function displayMemes(url){
  memeContainer.replaceChildren()
  const memeImage = document.createElement('img');
    memeImage.src = url;
    memeContainer.appendChild(memeImage);
    memeImage.style = 'width: 600px; height; 600px'
};

function searchFunction() {
  let input, filter, MSul, MSli, a, i, txtValue;
  input = document.getElementById('meme-input');
  filter = input.value.toUpperCase();
  MSul = document.getElementById('meme-list');
  MSli = MSul.getElementsByTagName('li');

for (i = 0; i < MSli.length; i++) {
  a = MSli[i].getElementsByTagName("a")[0];
  txtValue = a.textContent;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    MSli[i].style.display = "";
  } else {
    MSli[i].style.display = "none"
  }
}
}

const searchForm = document.querySelector('#meme-form')
searchForm.addEventListener('submit', searchMemes)

function searchMemes(e) {
  e.preventDefault();
  
  fetch('https://api.imgflip.com/get_memes')
  .then(resp => resp.json())
  .then(json => {
    let query = document.querySelector('#meme-input').value;
    searchForm.reset()
    const match = json.data.memes.filter(function(memes){
        return memes.name === query
      })
      displayMemes(match[0].url)
      })
  memeContainer.replaceChildren()


}
// const randomMemebtn = document.createElement('button')
// const memeListHolder = document.querySelector('#meme-list-holder')
// randomMemebtn.innerHTML = "Generate Random Meme!"
// memeListHolder.appendChild(randomMemebtn)
// randomMemebtn.addEventListener('click', randomMeme)
// generate random meme
function randomMeme(){
let random = Math.floor(Math.random() * 99);
fetch('https://api.imgflip.com/get_memes')
  .then(resp => resp.json())
  .then(json => displayMemes(json.data.memes[random].url))  
}
init();

