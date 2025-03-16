const projHead = document.querySelectorAll(".proj-head");

projHead.forEach((head) => {
  let name = head.childNodes[1];
  let arrow = head.childNodes[3];
  head.addEventListener("mouseenter", () => {
    arrow.style.animation = "move 1s ease-in-out infinite";
    name.style.textShadow = "white 0px 0px 8px";
  });

  head.addEventListener("mouseleave", () => {
    arrow.style.animation = "unset";
    name.style.textShadow = "none";
  });
});

const menuCtn = document.querySelector(".menu-ctn");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".x-close");

hamburger.addEventListener("click", () => {
  menuCtn.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  menuCtn.style.transform = "translateX(5000px)";
});
