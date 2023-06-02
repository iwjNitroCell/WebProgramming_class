const score = [0, 0, 0, 0]

var result = "";
var code = 0;

var div;
var Img;
var H3;
var A;

function processing(){
    div = document.getElementById("resultDiv");
    Img = div.children[0].children[0];
    H3 = div.children[1];
    A = div.children[2].children[0];

    const url = new URL(window.location.href);
    const urlParams = url.searchParams;

    score[0] += Number(urlParams.get("Q1"));
    score[0] += Number(urlParams.get("Q6"));
    score[0] += Number(urlParams.get("Q11"));
    score[1] += Number(urlParams.get("Q5"));
    score[1] += Number(urlParams.get("Q7"));
    score[1] += Number(urlParams.get("Q12"));
    score[2] += Number(urlParams.get("Q2"));
    score[2] += Number(urlParams.get("Q4"));
    score[2] += Number(urlParams.get("Q9"));
    score[3] += Number(urlParams.get("Q3"));
    score[3] += Number(urlParams.get("Q8"));
    score[3] += Number(urlParams.get("Q10"));
    
    for(var i=0; i<score.length; i++){
        switch(i){
            case 0:
                if(score[i] < 0){
                    result += "E";
                }
                else{
                    result += "H";
                }
                break;
            case 1:
                if(score[i] < 0){
                    result += "A";
                }
                else{
                    result += "C";
                }
                break;
            case 2:
                if(score[i] < 0){
                    result += "F";
                }
                else{
                    result += "I";
                }
                break;
            case 3:
                if(score[i] < 0){
                    result += "S";
                }
                else{
                    result += "L";
                }
                break;
        }
    }

    
    switch(result){
        case "ECIL": // left 4 dead 2  code: 1
            Img.src = "img/left_4_dead_2.PNG";
            Img.alt = "left 4 dead 2";
            H3.innerHTML = "Left 4 Dead 2";
            A.href = "gamePage.html?gamecode=1";
            break;
        case "HCIS": // rainbow six seige  code: 2
            Img.src = "img/raindow_6_seige.PNG";
            Img.alt = "rainbow six seige";
            H3.innerHTML = "Rainbow six Seige";
            A.href = "gamePage.html?gamecode=2";
            break;
        case "HAFS": // enter the gungeon  code: 3
            Img.src = "img/enter_the_gungeon.PNG";
            Img.alt = "enter the gungeon";
            H3.innerHTML = "Enter the Gungeon";
            A.href = "gamePage.html?gamecode=3";
            break;
        case "EAFS": // skul  code: 4
            Img.src = "img/shul.PNG";
            Img.alt = "skul";
            H3.innerHTML = "Skul The Hero Slayer";
            A.href = "gamePage.html?gamecode=4";
            break;
        case "HCFL": // civilization  code: 5
            Img.src = "img/civilization.PNG";
            Img.alt = "civilization";
            H3.innerHTML = "Sid Meier's Civilization VI";
            A.href = "gamePage.html?gamecode=5";
            break;
        case "HAFL": // monster hunter  code: 6
            Img.src = "img/monster_hunter.PNG";
            Img.alt = "monster hunter";
            H3.innerHTML = "Monster Hunter: World";
            A.href = "gamePage.html?gamecode=6";
            break;
        case "ECFS": // human: fall flat  code: 7
            Img.src = "img/human_fall_flat.PNG";
            Img.alt = "human: fall flat";
            H3.innerHTML = "Human: Fall Flat";
            A.href = "gamePage.html?gamecode=7";
            break;
        case "HAIS": // hunt: showdown  code: 8
            Img.src = "img/hunt_showdown.PNG";
            Img.alt = "hunt: showdown";
            H3.innerHTML = "Hunt: Showdown";
            A.href = "gamePage.html?gamecode=8";
            break;
        case "ECFL": // ark survival  code: 9
            Img.src = "img/ark_survival.PNG";
            Img.alt = "ark survival";
            H3.innerHTML = "ARK: Survival Evolved";
            A.href = "gamePage.html?gamecode=9";
            break;
        case "EAFL": // stardew valley  code: 10
            Img.src = "img/stardew_valley.PNG";
            Img.alt = "stardew valley";
            H3.innerHTML = "Stardew Valley";
            A.href = "gamePage.html?gamecode=10";
            break;
        case "ECIS": // hearthstone  code: 11
            Img.src = "img/hearthstone.jpg";
            Img.alt = "hearthstone";
            H3.innerHTML = "HearthStone";
            A.href = "gamePage.html?gamecode=11";
            break;
        case "EAIS": // slay the spire  code: 12
            Img.src = "img/slay_the_spire.PNG";
            Img.alt = "slay the spire";
            H3.innerHTML = "Slay the Spire";
            A.href = "gamePage.html?gamecode=12";
            break;
        case "HCIL": // potal2  code: 13
            Img.src = "img/portal2.PNG";
            Img.alt = "potal2";
            H3.innerHTML = "Portal 2";
            A.href = "gamePage.html?gamecode=13";
            break;
        case "EAIL": // vampire survivors  code: 14
            Img.src = "img/vampire_survivors.PNG";
            Img.alt = "vampire survivors";
            H3.innerHTML = "Vampire Survivors";
            A.href = "gamePage.html?gamecode=14";
            break;
        case "HCFS": // for the king  code: 15
            Img.src = "img/for_the_king.PNG";
            Img.alt = "for the king";
            H3.innerHTML = "For The King";
            A.href = "gamePage.html?gamecode=15";
            break;
        case "HAIL": // there is no game  code: 16
            Img.src = "img/there_is_no_game.PNG";
            Img.alt = "there is no game";
            H3.innerHTML = "There Is No Game: Wrong Dimension";
            A.href = "gamePage.html?gamecode=16";
            break;
    }
}
