const score = [0, 0, 0, 0]

function init(){
    
}

function processing(obj){
    score[0] += Number(obj.Q1.value);
    score[0] += Number(obj.Q2.value);
    score[0] += Number(obj.Q3.value);
    score[1] += Number(obj.Q4.value);
    score[1] += Number(obj.Q5.value);
    score[1] += Number(obj.Q6.value);
    score[2] += Number(obj.Q7.value);
    score[2] += Number(obj.Q8.value);
    score[2] += Number(obj.Q9.value);
    score[3] += Number(obj.Q10.value);
    score[3] += Number(obj.Q11.value);
    score[3] += Number(obj.Q12.value);

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
                    result += "S";
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
                    result += "L";
                }
                break;
            case 3:
                if(score[i] < 0){
                    result += "M";
                }
                else{
                    result += "P";
                }
                break;
        }
    }
    console.log(score);
    console.log(result);
    
}

