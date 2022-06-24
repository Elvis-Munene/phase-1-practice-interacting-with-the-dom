let counter = document.getElementById('counter')
let counterCont = Number(counter.textContent)
console.log(counterCont);

function timed(){
    counterCont += 1;
    counter.innerHTML = counterCont;
}
const start = setInterval( timed,1000)

const minusNumber =  document.getElementById('minus')

minusNumber.addEventListener('click', ()=>{
    counter.innerHTML = counterCont --
    console.log(counterCont);
})


const plusNumber = document.getElementById('plus')

plusNumber.addEventListener('click', () =>{
    counter.innerHTML = counterCont ++
})

const likeNumber = document.getElementById('heart')

likeNumber.addEventListener('click', () =>{
    let likes = document.createElement('li')
    likes.textContent = `${counterCont} has been liked 1 time`
    document.querySelector('.likes').appendChild(likes)
})


const pauseButton = document.getElementById('pause')

const resumeButton = document.getElementById('resume')

function resume() {
  pauseButton.style.display = '';
  resumeButton.style.display = 'none';
}

function pause() {
  clearInterval(start);
  pauseButton.style.display = 'none';
  resumeButton.style.display = '';
}

pauseButton.addEventListener("click", (e) => {
  pause()
})

resumeButton.addEventListener("click", (e) => {
  resume()
})

    

const form = document.getElementById('#comment-form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let comment = form.querySelector('#comment-input').value 
    console.log(comment);
    let newComment = document.createElement('li')
    newComment.textContent = comment
   document.querySelector('#list').appendChild(newComment)
   e.target.reset();
})