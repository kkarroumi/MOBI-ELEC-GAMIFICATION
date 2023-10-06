function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XzJP8TBSQk":
        Script1();
        break;
      case "6AGah2NiP9b":
        Script2();
        break;
  }
}

function Script1()
{
  function zeros(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var fin="Done";
var player = GetPlayer();
var count = player.GetVar("Timer_Duree");
var minutes, seconds, timer, totalTime;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    minutes = zeros(Math.floor(count / 60));
    seconds = zeros(count % 60);
    if (count == 0){
        player.SetVar("Timer_Fin",fin);
}
    if (count < 0) {
        clearInterval(counter);
        return;
    }
    totalTime = minutes + ':' + seconds;
    player.SetVar("Timer_Affichage",totalTime);
}
}

function Script2()
{
  var player = GetPlayer(); // Récupérer l'objet Player

// Attribution de la valeur 0 à la variable "SN"
player.SetVar("SN", 0);
player.SetVar("SN1", 0);
player.SetVar("SN2", 0);
player.SetVar("SN3", 0);
player.SetVar("SN4", 0);
}

