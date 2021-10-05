function init(){ 
  fetch('https://api.imgflip.com/get_memes')
  .then(resp => resp.json())
  .then(json =>  loadMemesName(json.data.memes))
}
const memeList = document.querySelector('#meme-list');
const memeContainer = document.getElementById('meme');
function loadMemesName(memes) {
  memes.forEach(memes => {
    const li = document.createElement('li');
    li.innerHTML = memes.name
    li.id = memes.url
    memeList.append(li)
    li.addEventListener('click' , () => displayMemes(li.id))
  })
};
// function fetchMeme(id){
//   fetch(id)
//   .then(resp => resp.json())
//   .then(json => displayMemes(json))
  
// // }
function displayMemes(url){
    const memeImage = document.createElement('img');
    memeImage.src = url;
    memeContainer.appendChild(memeImage);
};


const searchForm = document.querySelector('#meme-form').addEventListener('submit', searchMemes)
function searchMemes(e) {
  e.preventDefault();
  const query = document.querySelector('#meme-input').value
  fetch('https://api.imgflip.com/get_memes')
  .then(resp => resp.json())
  .then(json   => {
    json.data.memes.forEach(meme => console.log(meme.name))
  }
    )



  // searchForm.reset()
  // memeContainer.replaceChildren()
}



init()