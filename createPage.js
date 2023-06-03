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
    var Img_src;
    var developer;
    var category;
    var price;
    switch(code){
        case '1':
            H2 = "Left 4 Dead 2";
            A_href = "https://store.steampowered.com/app/550/Left_4_Dead_2/";
            Img_src = "img/left_4_dead_2.PNG";
            developer = "Valve";            
            category = "슈팅, 멀티 플레이, 좀비, 고어, 생존";
            price = "11000원";
            break;
        case '2':
            H2 = "Rainbow six Seige";
            A_href = "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/";
            Img_src = "img/raindow_6_seige.PNG";
            developer = "Ubisoft Montreal";
            category = "슈팅, 전략, 멀티 플레이, 경쟁";
            price = "22000원";
            break;
        case '3':
            H2 = "Enter the Gungeon";
            A_href = "https://store.steampowered.com/app/311690/Enter_the_Gungeon/";
            Img_src = "img/left_4_dead_2.PNG";
            developer = "Dodge Roll";             
            category = "인디, 로그라이크, 픽셀 그래픽, 슈팅, 싱글, 멀티 플레이";
            price = "16500원";
            break;
        case '4':
            H2 = "Skul The Hero Slayer";
            A_href = "https://store.steampowered.com/app/1147560/Skul_The_Hero_Slayer/";
            Img_src = "img/skul.PNG";
            developer = "SOUTHPAW GAMES";            
            category = "인디, 로그라이크, 픽셀, 그래픽, 액션, 싱글";
            price = "20500원";
            break;
        case '5':
            H2 = "Sid Meier's Civilization VI";
            A_href = "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/";
            Img_src = "img/civilization.PNG";
            developer = "Firaxis Games";            
            category = "전략, 멀티 플레이, 역사, 턴제";
            price = "65000원";
            break;
        case '6':
            H2 = "Monster Hunter: World";
            A_href = "https://store.steampowered.com/app/582010/Monster_Hunter_World/";
            Img_src = "img/monster_hunter.PNG";
            developer = "CAPCOM Co., Ltd.";           
            category = "액션, 멀티 플레이, 오픈 월드, 판타지";
            price = "34900원";
            break;
        case '7':
            H2 = "Human: Fall Flat";
            A_href = "https://store.steampowered.com/app/477160/Human_Fall_Flat/";
            Img_src = "img/human_fall_flat.PNG";
            developer = "No Brakes Games";
            category = "멀티 플레이, 퍼즐, 어드벤처, 유머";
            price = "20500원";
            break;
        case '8':
            H2 = "Hunt: Showdown";
            A_href = "https://store.steampowered.com/app/594650/Hunt_Showdown/";
            Img_src = "img/hunt_showdown.PNG";
            developer = "Crytek";
            category = "슈팅, 전략, 멀티 플레이, 분위기있는, 싱글, 멀티, 생존";
            price = "49000원";
            break;
        case '9':
            H2 = "ARK: Survival Evolved";
            A_href = "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/";
            Img_src = "img/ark_survival.PNG";
            developer = "Studio Wildcard"; 
            category = "생존, 오픈월드, 멀티 플레이, 싱글, 제작, 공룡";
            price = "20500원";
            break;
        case '10':
            H2 = "Stardew Valley";
            A_href = "https://store.steampowered.com/app/413150/Stardew_Valley/";
            Img_src = "img/stardew_valley.PNG";
            developer = "ConcernedApe";
            category = "시뮬레이션, 픽셀 그래픽, 싱글, 릴랙스";
            price = "16000원";
            break;
        case '11':
            H2 = "HearthStone";
            A_href = "https://hearthstone.blizzard.com/ko-kr";
            Img_src = "img/hearthstone.jpg";
            developer = "Blizzard Entertainment";
            category = "멀티 플레이, 전략, 카드, 턴제";
            price = "무료";
            break;
        case '12':
            H2 = "Slay the Spire";
            A_href = "https://store.steampowered.com/app/646570/Slay_the_Spire/";
            Img_src = "img/slay_the_spire.PNG";
            developer = "Mega Crit Games";
            category = "싱글, 카드, 턴제, 로그라이크, 전략, 인디";
            price = "26000원";
            break;
        case '13':
            H2 = "Portal 2";
            A_href = "https://store.steampowered.com/app/620/Portal_2/";
            Img_src = "img/portal2.PNG";
            developer = "Valve";
            category = "싱글, 멀티 플레이, 퍼즐, 공상과학";
            price = "11000원";
            break;
        case '14':
            H2 = "Vampire Survivors";
            A_href = "https://store.steampowered.com/app/1794680/Vampire_Survivors/";
            Img_src = "img/vampire_survivors.PNG";
            developer = "poncle";
            category = "로그라이크, 액션, 싱글, 픽셀 그래픽, 슈팅";
            price = "5000원";
            break;
        case '15':
            H2 = "For The King";
            A_href = "https://store.steampowered.com/app/527230/For_The_King/";
            Img_src = "img/for_the_king.PNG";
            developer = "IronOak Games";
            category = "턴제, 전략, 멀티 플레이, 판타지";
            price = "20500원";
            break;
        case '16':
            H2 = "There Is No Game: Wrong Dimension";
            A_href = "https://store.steampowered.com/app/1240210/There_Is_No_Game_Wrong_Dimension/";
            Img_src = "img/there_is_no_game.PNG";
            developer = "Draw Me A Pixel";
            category = "인디, 퍼즐, 픽셀 그레픽, 싱글";
            price = "13500원";
            break;
    }
    creating(H2, P, A_href, Img_src, developer, category, price);
}

function creating(H2_cont ,P_cont, A_href, Img_src, developer, category, price){
    var P = document.getElementById("main");
    var Img = document.getElementById("Img");
    var A = document.getElementById("Link");
    var H2 = document.getElementById("Name");

    document.getElementById("develop").innerHTML = developer;
    document.getElementById("category").innerHTML = category;
    document.getElementById("price").innerHTML = price;

    H2.innerHTML = H2_cont;
    Img.src = Img_src;
    A.href = A_href;
}
