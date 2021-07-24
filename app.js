const container = document.querySelector(".container")
const wallpapers =[
    {name: "avengers", image:"images/avengers.jpg"},
    {name: "hacking", image:"images/hacking.jpg"},
    {name: "iron", image:"images/iron.jpg"},
    {name: "lord", image:"images/lord.jpg"},
    {name: "lord2", image:"images/lord2.jpg"},
    {name: "marvel", image:"images/marvel.jpg"},
    {name: "prog", image:"images/prog.jpg"},
    {name: "transformers", image:"transformers/lord.jpg"},
    {name: "transformers1", image:"images/tranformers1.jpg"},
]

const showWallpapers = () =>{
    let output = ""
    wallpapers.forEach(
        ({name,image}) => 
    (output +='
        <div class="card">
            <img class="card--avatar" src=${image}/>
            <h1 class="card--title">$(name)</h1>
            <a class="card--link" href="#">Taste</a>
        </div>
    ')
    )
    container.innerHTtML = output
}

document.addEventListener("DOMContentLoaded", showWallpapers)