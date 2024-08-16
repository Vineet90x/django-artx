const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Update the position of the dot cursor immediately
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Update the position of the outline cursor with a smooth animation
//   cursorOutline.style.left = `${posX}px`;
//   cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{ duration:500, fill:"forwards"});

});