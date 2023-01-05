// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
let movie_box=document.getElementById("movies")

let amount=JSON.parse(localStorage.getItem("amount"))
let display_amount=document.getElementById("paisa")
display_amount.innerText=amount



 async function searchMovies(){

  try{
    const name=document.getElementById("search").value

    const res= await fetch(`http://www.omdbapi.com/?s=${name}&apikey=8d124480`)

    const data=await res.json()
    const movies=data.Search
    appendMovies(movies)
    console.log(movies)
    return movies
  }catch(err){
    console.log(err)
  } 
}

function appendMovies(data){

  if(data==undefined){
    return false
  }

  movie_box.innerHTML=null
  data.forEach(function (el){
    let box=document.createElement("div")
    box.setAttribute("class","box")
    let img=document.createElement("img")
    img.setAttribute("class","photo")
    img.src=el.Poster
    let p=document.createElement("p")
    p.innerText=el.Title
    let btn=document.createElement("button")
    btn.setAttribute("class","book_now")
    btn.innerText='Book Now'
    btn.addEventListener("click",function(){
      clickFn(el)
    })
    box.append(img,p,btn)
    movie_box.append(box)
  })
}

async function main(){
  let data=await searchMovies()

  if(data===undefined){
    return false
  }
  appendMovies(data)
}

function debounce(func,delay){
  if(id){
    clearTimeout(id)
  }
  id=setTimeout(function(){
    func()
  },delay)
}

function clickFn(el){
  localStorage.setItem("movie",JSON.stringify(el))
  window.location.href='checkout.html'
}

