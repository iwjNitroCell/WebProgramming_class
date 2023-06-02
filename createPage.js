const url = new URL(window.location.href);
const urlParams = url.searchParams;

function init(){
    var parameter = urlParams.get("category");
    show(parameter);
    
}

function show(name){
    
    const games = document.getElementsByClassName("game");
    for(var i = 0; i< games.length; i++){
        games[i].style.display = "none";
        for(var j=0; j < games[i].classList.length; j++){
            console.log(games[i].classList[j])
            if(games[i].classList[j] == name){
                games[i].style.display = "block";
                continue;
            }
        }
    }
}