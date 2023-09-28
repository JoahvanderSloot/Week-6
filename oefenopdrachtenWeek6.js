let timer = 0;
let haaiX = 100
let haaiY = 650
let kant = 50

function setup() {
  createCanvas(700, 700);
}

function draw() {


  timer += deltaTime
  if (timer >= 2000) {

    background(255)

    for (let i = 0; i < 10; i++) {
      drawFlower()
      timer = 0
    }
  }


  if (keyIsDown(LEFT_ARROW)) {
    kant = 50
    haaiX -= 2,5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    kant = -50
    haaiX += 2,5
  }

  tekenHaai(haaiX, haaiY, kant);
}

function drawFlower() {

  let rpX = round(random(0, 700));
  let rpY = round(random(0, 500));

  strokeWeight(1)

  fill("#FEA408")
  circle(rpX - 10, rpY - 20, 30)
  circle(rpX + 10, rpY - 20, 30)
  circle(rpX + 20, rpY - 5, 30)
  circle(rpX + 20, rpY + 10, 30)
  circle(rpX + 10, rpY + 20, 30)
  circle(rpX - 10, rpY + 20, 30)
  circle(rpX - 20, rpY, 30)
  fill("white")
  circle(rpX, rpY, 30)

}

function tekenHaai(x, y, direction) {

  strokeWeight(0)

  fill("grey")
  circle(x, y, 130)
  fill("white")
  circle(x + direction, y-5, 140)
  fill("blue")
  rect(0, 650, 700, 500)


}










/*
function setup() {
  createCanvas(800, 600);
  background(100);
}

function draw(){
  huis()
}

function huis(){
let x = 150
let y = 200
let widht = 200
let height = 250
let roofHeight = 100
let doorWidth = 80
let doorHeight = 40

rect (x, y, widht, height)
triangle (x, y, x + 200, y, roofHeight + 150, roofHeight)
rect (x + 20, y + 170, doorHeight, doorWidth)
}
*/


/*
let namen = [];

namen[0] = [];
namen[0]["voornaam"] = "Joris";
namen[0]["achternaam"] = "den Ouden";
namen[0]["leeftijd"] = 25;

namen[1] = [];
namen[1]["voornaam"] = "Jan";
namen[1]["achternaam"] = "Dekker";
namen[1]["leeftijd"] = 34;

namen[2] = [];
namen[2]["voornaam"] = "Astrid";
namen[2]["achternaam"] = "Kan";
namen[2]["leeftijd"] = 90;


function setup() {
  createCanvas(800, 600);
}

function draw() {
    background(300)

    text(namen[0]["voornaam"], 10, 200)
    text(namen[0]["achternaam"], 10, 220)
    text(namen[0]["leeftijd"], 10, 240)
    text(namen[1]["voornaam"], 10, 300)
    text(namen[1]["achternaam"], 10, 320)
    text(namen[1]["leeftijd"], 10, 340)
    text(namen[2]["voornaam"], 10, 400)
    text(namen[2]["achternaam"], 10, 420)
    text(namen[2]["leeftijd"], 10, 440)
}




let dieren = [
  ["Goudvis", "Zalm", "Clownvis", "Haai", "Tonijn"],
  ["Adelaar", "Papegaai", "Mees", "Kolibrie", "Uil"],
  ["Leeuw", "Olifant", "Walvis", "Vleermuis", "Giraffe"],
  ["Bij", "Vlinder", "Mier", "Libelle", "Kever"]
]

function setup() {
  createCanvas(800, 600);
}

function draw() {
    background(300)

    text(dieren[0][0], 20, 20)
    text(dieren[0][3], 20, 35)
    text(dieren[1][2], 20, 50)
    text(dieren[2][2], 20, 65)
    text(dieren[2][0], 20, 80)
    text(dieren[3][1], 20, 95)
    text(dieren[3][3], 20, 110)
    text(dieren[3][2], 20, 125)
}
*/