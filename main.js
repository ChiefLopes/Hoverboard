const container = document.getElementById("container");
const beautifulColors = [
  "#FF6F61", // Coral
  "#FFD166", // Apricot
  "#06D6A0", // Teal
  "#118AB2", // Dark Blue
  "#FFB7B2", // Pink
  "#FFD700", // Gold
  "#336699", // Royal Blue
  "#FFAC33", // Orange
  "#CFCFC4", // Silver
  "#536872", // Slate Gray
  "#E63946", // Watermelon
  "#457B9D", // Steel Blue
  "#FFC3A0", // Peach
  "#008080", // Teal Green
  "#B19CD9", // Lavender
  "#FF5A5F", // Tomato Red
  "#99B898", // Sage Green
  "#BAAB68", // Goldenrod
  "#4F372D", // Chocolate Brown
  "#8E8D8A", // Gray
];

const SQUARES = 500;

for (i = 0; i < SQUARES; i++) {
    const squares = document.createElement("div");
    squares.classList.add("square");
    console.log(squares.length);
}