window.onload = function () {
  const goblin = document.getElementById("goblin");

  let spinningRight = true;
  if (goblin) {
    goblin.onclick = () => {
      spinningRight = !spinningRight;

      if (!spinningRight) {
        goblin.classList.remove("spinning-right");
        goblin.classList.add("spinning-left");
      } else {
        goblin.classList.remove("spinning-left");
        goblin.classList.add("spinning-right");
      }
    };
  }
};
