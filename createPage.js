const url = new URL(window.location.href);
const urlParams = url.searchParams;

function init_list(){
    var parameter = urlParams.get("category");
    show(parameter); 
}

function init_page(){
    var parameter = urlParams.get("gamecode");
    chooseContent(parameter);
}

function show(name){
    const games = document.getElementsByClassName("game");
    for(var i = 0; i< games.length; i++){
        games[i].style.display = "none";
        for(var j=0; j < games[i].classList.length; j++){
            if(games[i].classList[j] == name){
                games[i].style.display = "block";
                continue;
            }
        }
    }
}

function moveGamePage(code){
    window.location.href = "gamePage.html?gamecode=" + code;
}

function chooseContent(code){
    var H2;
    var P;
    var A_href;
    switch(code){
        case '1':
            H2 = "Left 4 Dead 2";
            A_href = "https://store.steampowered.com/app/550/Left_4_Dead_2/";
            break;
        case '2':
            H2 = "Rainbow six Seige";
            A_href = "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/";
            break;
        case '3':
            H2 = "Enter the Gungeon";
            A_href = "https://store.steampowered.com/app/311690/Enter_the_Gungeon/";
            break;
        case '4':
            H2 = "Skul The Hero Slayer";
            A_href = "https://store.steampowered.com/app/1147560/Skul_The_Hero_Slayer/";
            break;
        case '5':
            H2 = "Sid Meier's Civilization VI";
            A_href = "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/";
            break;
        case '6':
            H2 = "Monster Hunter: World";
            A_href = "https://store.steampowered.com/app/582010/Monster_Hunter_World/";
            break;
        case '7':
            H2 = "Human: Fall Flat";
            A_href = "https://store.steampowered.com/app/477160/Human_Fall_Flat/";
            break;
        case '8':
            H2 = "Hunt: Showdown";
            A_href = "https://store.steampowered.com/app/594650/Hunt_Showdown/";
            break;
        case '9':
            H2 = "ARK: Survival Evolved";
            A_href = "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/";
            break;
        case '10':
            H2 = "Stardew Valley";
            A_href = "https://store.steampowered.com/app/413150/Stardew_Valley/";
            break;
        case '11':
            H2 = "HearthStone";
            A_href = "https://hearthstone.blizzard.com/ko-kr";
            break;
        case '12':
            H2 = "Slay the Spire";
            A_href = "https://store.steampowered.com/app/646570/Slay_the_Spire/";
            break;
        case '13':
            H2 = "Portal 2";
            A_href = "https://store.steampowered.com/app/620/Portal_2/";
            break;
        case '14':
            H2 = "Vampire Survivors";
            A_href = "https://store.steampowered.com/app/1794680/Vampire_Survivors/";
            break;
        case '15':
            H2 = "For The King";
            A_href = "https://store.steampowered.com/app/527230/For_The_King/";
            break;
        case '16':
            H2 = "There Is No Game: Wrong Dimension";
            A_href = "https://store.steampowered.com/app/1240210/There_Is_No_Game_Wrong_Dimension/";
            break;
    }
    creating(H2, P, A_href);
}

function creating(H2_cont ,P_cont, A_href){
    var Body = document.getElementById("main");
    var H2 = Body.children[0]; 
    var P = Body.children[1];
    var A = Body.children[2].children[0];

    H2.innerHTML = H2_cont;
    A.href = A_href;
}
