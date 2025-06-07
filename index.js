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

// Quick Interview Modal Logic
const quickTopBtn = document.getElementById("quickInterviewTop");
const quickFooterBtn = document.getElementById("quickInterviewFooter");
const quickModal = document.getElementById("quickModal");
const startInterviewBtn = document.getElementById("startInterview");
const closeModalBtn = document.getElementById("closeModal");

function openQuickModal(e) {
  e.preventDefault();
  quickModal.style.display = "flex";
}

[quickTopBtn, quickFooterBtn].forEach((btn) => {
  if (btn) btn.addEventListener("click", openQuickModal);
});

if (startInterviewBtn) {
  startInterviewBtn.addEventListener("click", () => {
    window.location.href = "interview.html";
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    quickModal.style.display = "none";
  });
}
