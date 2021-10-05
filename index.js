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

function displayMemes(url){
  memeContainer.replaceChildren()
  const memeImage = document.createElement('img');
    memeImage.src = url;
    memeContainer.appendChild(memeImage);
    memeImage.style = 'width: 600px; height; 600px'
};


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
    init();
