const score = [0, 0, 0, 0]

var result = "";
var code = 0;

function processing(){
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;

    score[0] += Number(urlParams.get("Q1"));
    score[0] += Number(urlParams.get("Q2"));
    score[0] += Number(urlParams.get("Q3"));
    score[1] += Number(urlParams.get("Q4"));
    score[1] += Number(urlParams.get("Q5"));
    score[1] += Number(urlParams.get("Q6"));
    score[2] += Number(urlParams.get("Q7"));
    score[2] += Number(urlParams.get("Q8"));
    score[2] += Number(urlParams.get("Q9"));
    score[3] += Number(urlParams.get("Q10"));
    score[3] += Number(urlParams.get("Q11"));
    score[3] += Number(urlParams.get("Q12"));
    console.log(score);
    
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
        case "ECIL": 
            code = 1;
            break;
        case "HCIS":
            code = 2;
            break;
        case "EAFS":
            code = 3;
            break;
        case "HAFS":
            code = 4;
            break;
        case "HCFL":
            code = 5;
            break;
        case "HAFL":
            code = 6;
            break;
        case "ECFS":
            code = 7;
            break;
        case "HAIS":
            code = 8;
            break;
        case "ECFL":
            code = 9;
            break;
        case "EAFL":
            code = 10;
            break;
        case "ECIS":
            code = 11;
            break;
        case "EAIS":
            code = 12;
            break;
        case "HCIL":
            code = 13;
            break;
        case "EAIL":
            code = 14;
            break;
        case "HCFS":
            code = 15;
            break;
        case "HAIL":
            code = 16;
            break;
    } 
}



