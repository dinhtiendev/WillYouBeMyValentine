function shrinkNoButton() {
  let yesButton = document.getElementById("yes-btn");
  let noButton = document.getElementById("no-btn");

  // Lấy kích thước hiện tại
  let yesSize = parseInt(yesButton.style.fontSize) || 16;
  let noSize = parseInt(noButton.style.fontSize) || 16;

  // Tăng size button Yes, giảm size button No
  yesButton.style.fontSize = yesSize + 5 + "px";
  noButton.style.fontSize = Math.max(noSize - 2, 8) + "px";
}
