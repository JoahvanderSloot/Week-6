//Variabel om te kunnen veranderen van character pixel art.
let pixelArtCycle = 0

//setup, maakt het canvas
function setup() {
  createCanvas(800, 800);
}

//tekent de achtergrond, en tekent (met if statements) als de waarde van pixelArtCycle klopt de juiste pixel art.
function draw() {
  background(250);

choseCharacter();

  if (pixelArtCycle == 1) {
    mario();

  }
  else if (pixelArtCycle == 2) {
    deadpool();
  }

  else if (pixelArtCycle == 3) {
    grogu();
  }

  else if (pixelArtCycle == 4) {
    cat();
  }

}

//mouseClicked maakt he zo dat als je een blokje met een naam aanklikt dat pixelArtCycle de correcte waarde krijgt.
function mouseClicked() {
  if (mouseX >= 500 && mouseX <= 650 && mouseY >= 100 && mouseY <= 140) {
    pixelArtCycle = 1
  }
  else if (mouseX >= 500 && mouseX <= 650 && mouseY >= 140 && mouseY <= 180) {
    pixelArtCycle = 2
  }
  else if (mouseX >= 500 && mouseX <= 650 && mouseY >= 180 && mouseY <= 220) {
    pixelArtCycle = 3
  }
  else if (mouseX >= 500 && mouseX <= 650 && mouseY >= 220 && mouseY <= 260) {
    pixelArtCycle = 4
  }
  console.log(pixelArtCycle)

}

//mario zijn de kleuren die mario moet krijgen als i getekent word (met #collor codes).
function mario() {
  strokeWeight(0)

  let marioCollors = [
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#70350A", "#70350A", "#FFC100", "#FFC100", "#000000", "#FFC100", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#FFC100", "#70350A", "#FFC100", "#FFC100", "#FFC100", "#000000", "#FFC100", "#FFC100", "#FFC100", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#FFC100", "#70350A", "#70350A", "#FFC100", "#FFC100", "#FFC100", "#000000", "#FFC100", "#FFC100", "#FFC100", "#FFFFFF", "#FFFFFF"],
    ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#FFC100", "#FFC100", "#FFC100", "#FFC100", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "#FFC100", "#FFC100", "#FFC100", "#FFC100", "#FFC100", "#FFC100", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "#FF0000", "#FF0000", "#0000FF", "#FF0000", "#FF0000", "#0000FF", "#FF0000", "#FF0000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "FFFFFF", "#FF0000", "#FF0000", "#FF0000", "#0000FF", "#FF0000", "#FF0000", "#0000FF", "#FF0000", "#FF0000", "#FF0000", "FFFFFF", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "#FFC100", "#FFC100", "#FF0000", "#0000FF", "#FFFF00", "#0000FF", "#0000FF", "#FFFF00", "#0000FF", "#FF0000", "#FFC100", "#FFC100", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "#FFC100", "#FFC100", "#FFC100", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#FFC100", "#FFC100", "#FFC100", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "#FFC100", "#FFC100", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#0000FF", "#FFC100", "#FFC100", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "#0000FF", "#0000FF", "#0000FF", "#FFFFFF", "#FFFFFF", "#0000FF", "#0000FF", "#0000FF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "FFFFFF", "#70350A", "#70350A", "#70350A", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#70350A", "#70350A", "FFFFFF", "FFFFFF", "FFFFFF"],
    ["FFFFFF", "FFFFFF", "#70350A", "#70350A", "#70350A", "#70350A", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#70350A", "#70350A", "#70350A", "#70350A", "FFFFFF", "FFFFFF"]
  ];


  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      fill(marioCollors[y][x]);
      square(20 * x, 20 * y + 10, 20);
    }
  }
  
}

//deadpool zijn de kleuren die deadpool moet krijgen als i getekent word, (met getallen die in dezelfde functie een kleur toegewezen krikgen).
function deadpool() {
  strokeWeight(0)

  let deadpoolColors = ["black", "red", "white", "#803f03", (59, 53, 51)];
  let pool = [
    [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2],
    [2, 0, 0, 2, 2, 0, 1, 1, 1, 4, 4, 4, 4, 1, 4, 0, 2, 2, 0, 0, 2],
    [2, 0, 3, 0, 2, 0, 1, 1, 1, 4, 4, 2, 2, 1, 2, 4, 2, 0, 3, 0, 2],
    [2, 2, 0, 3, 0, 0, 1, 1, 1, 4, 4, 2, 2, 1, 2, 4, 0, 3, 0, 2, 2],
    [2, 2, 2, 0, 3, 0, 1, 1, 1, 4, 4, 2, 2, 1, 2, 4, 3, 0, 2, 2, 2],
    [2, 2, 2, 2, 0, 3, 0, 1, 1, 1, 4, 4, 4, 1, 4, 1, 0, 2, 2, 2, 2],
    [2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2],
    [2, 2, 2, 0, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 0, 4, 4, 0, 2, 2, 2],
    [2, 2, 0, 1, 1, 4, 4, 4, 1, 0, 0, 0, 0, 0, 4, 4, 1, 1, 0, 2, 2],
    [2, 0, 1, 1, 1, 4, 0, 4, 4, 1, 1, 1, 4, 4, 0, 4, 1, 1, 1, 0, 2],
    [2, 0, 4, 4, 0, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 0, 4, 4, 0, 2],
    [2, 0, 1, 1, 1, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 1, 1, 1, 0, 2],
    [2, 0, 1, 1, 1, 0, 0, 4, 1, 1, 1, 1, 1, 4, 0, 0, 1, 1, 1, 0, 2],
    [2, 2, 0, 0, 0, 2, 0, 3, 3, 3, 4, 3, 3, 3, 0, 1, 0, 0, 0, 2, 2],
    [2, 2, 2, 2, 2, 0, 4, 4, 1, 1, 1, 1, 1, 4, 4, 0, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2],
    [2, 2, 2, 0, 0, 1, 1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 0, 0, 2, 2, 2],
    [2, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 4, 0, 0, 2],
    [0, 4, 4, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


  drawPixelArt(pool, deadpoolColors, 15);
}

//grogu zijn de kleuren die grogu moet krijgen als i getekent word, (met getallen die in dezelfde functie een kleur toegewezen krikgen).
function grogu() {

  let groguColors = ["black", "green", "white", "#803f03", "#e8a466", "pink"];
  let grog = [
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 2, 1, 1, 0, 2, 1, 1, 1, 1, 1],
    [0, 5, 5, 5, 1, 0, 0, 1, 1, 0, 0, 1, 5, 5, 5, 0],
    [2, 0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 0, 2],
    [2, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 2],
    [2, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 2],
    [2, 2, 2, 0, 4, 3, 4, 4, 4, 4, 3, 4, 0, 2, 2, 2],
    [2, 2, 2, 0, 4, 3, 4, 4, 4, 4, 3, 4, 0, 2, 2, 2],
    [2, 2, 2, 2, 0, 3, 4, 4, 4, 4, 3, 0, 2, 2, 2, 2],
    [2, 2, 2, 2, 0, 3, 4, 4, 4, 4, 3, 0, 2, 2, 2, 2],
    [2, 2, 2, 2, 0, 3, 4, 4, 4, 4, 3, 0, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2]
  ];


  drawPixelArt(grog, groguColors, 20);
}

//cat zijn de kleuren die cat moet krijgen als i getekent word, (met getallen die in dezelfde functie een kleur toegewezen krikgen).
function cat() {


  let catColors = ["white", "black", "grey", "yellow"];
  let catDrawing = [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 2, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 3, 1, 1, 3, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 2, 2, 2, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0, 0]
  ];


  drawPixelArt(catDrawing, catColors, 25);
}

//drawPixelArt gooit alle kleuren van de vorige funties in een square, zodat het gekleruede blokjes worden inplaats van alleen kleuren i een lijstje.
function drawPixelArt(pixels, colors, size)
{
  strokeWeight(0);
  for (let y = 0; y < pixels.length; y++) {
    for (let x = 0; x < pixels[y].length; x++) {
      fill(colors[pixels[y][x]]);
      square(size * x + 10, size * y + 10, size);
    }
  }
}

//choseCharacter maakt de kopjes waar je op klikt om een pixel art te kiezen (deze kopjes worden klikbaar door funtion mouseClicked).
function choseCharacter(){

  fill("black")
  textSize(40)
  text("choose a character", 400, 60)
  strokeWeight(1)
  textSize(25)
  fill("white")
  rect(500, 100, 150, 40)
  fill("black")
  text("Mario", 540, 125)
  fill("white")
  rect(500, 140, 150, 40)
  fill("black")
  text("Deadpool", 525, 165)
  fill("white")
  rect(500, 180, 150, 40)
  fill("black")
  text("Grogu", 540, 205)
  fill("white")
  rect(500, 220, 150, 40)
  fill("black")
  text("Cat", 550, 245)

}