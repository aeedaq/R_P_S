
var player_score = 0;
var comp_score = 0;
//1=rock
//2=paper
//3=scissors
function rps(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

function starters() {
  document.getElementById("c_choice_pic").style.display = "auto";
  document.getElementById("p_choice_pic").style.display = "auto";
  document.getElementById("show").style.display = "inline-flex";
  document.getElementById("result_div").style.display = "block";
  document.getElementById("main_result").style.display = "block";
  document.getElementById("result_show").innerHTML = "";
  document.getElementById("result_show").style.display = "block";
}

function ends() {
  comp_score = 0;
  player_score = 0;
  document.getElementById("score").innerHTML = "";
  document.getElementById("who").innerHTML = "";
  document.getElementById("main_result").style.display = "none";
}



function rock() {
  document.getElementById("p_choice_pic").src = "img/rock.jpeg";
  starters();
  var num = rps(1, 3);
  if ((player_score < 3) && (comp_score < 3)) {
    if (num == 1) {
      document.getElementById("c_choice_pic").src = "img/rock.jpeg";
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "tie!";
      document.getElementById("who").style.color = "orange";
    }
    else if (num == 2) {
      document.getElementById("c_choice_pic").src = "img/paper.jpeg";
      comp_score++;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to computer :(";
      document.getElementById("who").style.color = "red";
    }
    else if (num == 3) {
      document.getElementById("c_choice_pic").src = "img/scissors.jpeg";
      player_score++;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to YOU!!!";
      document.getElementById("who").style.color = "green";
    }
  }
  if ((player_score >= 3) || (comp_score >= 3)) {

    if (player_score > comp_score) {
      document.getElementById("result_show").innerHTML = "you won with a score of " + player_score + ":" + comp_score;
    }
    else {
      document.getElementById("result_show").innerHTML = "you lost loser with a score of " + player_score + ":" + comp_score;
    }

    ends();
  }
}

function paper() {
  document.getElementById("p_choice_pic").src = "img/scissors.jpeg";
  starters();

  var num = rps(1, 3);
  if ((player_score < 3) && (comp_score < 3)) {
    if (num == 1) {
      document.getElementById("c_choice_pic").src = "img/rock.jpeg";
      ++player_score;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to YOU!!!";
      document.getElementById("who").style.color = "green";
    }

    if (num == 2) {
      document.getElementById("c_choice_pic").src = "img/scissors.jpeg";
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "tie!";
      document.getElementById("who").style.color = "orange";
    }

    if (num == 3) {
      document.getElementById("c_choice_pic").src = "img/scissors.jpeg";
      ++comp_score;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to computer :(";
      document.getElementById("who").style.color = "red";
    }
  }
  if ((player_score >= 3) || (comp_score >= 3)) {
    if (player_score > comp_score) {
      document.getElementById("result_show").innerHTML = "you won with a score of " + player_score + ":" + comp_score;
    }
    else {
      document.getElementById("result_show").innerHTML = "you lost loser with a score of " + player_score + ":" + comp_score;
    }
    ends();
  }
}

function scissors() {
  document.getElementById("p_choice_pic").src = "img/scissors.jpeg";
  starters();

  var num = rps(1, 3);
  if ((player_score < 3) && (comp_score < 3)) {
    if (num == 1) {
      document.getElementById("c_choice_pic").src = "img/rock.jpeg";
      ++comp_score;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to computer :(";
      document.getElementById("who").style.color = "red";
    }

    if (num == 2) {
      document.getElementById("c_choice_pic").src = "img/paper.jpeg";
      ++player_score;
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "+1 score to YOU!!!";
      document.getElementById("who").style.color = "green";
    }

    if (num == 3) {
      document.getElementById("c_choice_pic").src = "img/scissors.jpeg";
      document.getElementById("score").innerHTML = player_score + ":" + comp_score;
      document.getElementById("who").innerHTML = "tie!";
      document.getElementById("who").style.color = "orange";
    }
  }
  if ((player_score >= 3) || (comp_score >= 3)) {

    if (player_score > comp_score) {
      document.getElementById("result_show").innerHTML = "you won with a score of " + player_score + ":" + comp_score;
    }
    else {
      document.getElementById("result_show").innerHTML = "you lost loser with a score of " + player_score + ":" + comp_score;
    }
    ends();
  }

}
