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

// Loader functionality
document.addEventListener("DOMContentLoaded", () => {
  const loaderOverlay = document.getElementById("loaderOverlay");

  // Hide loader after 2 seconds
  setTimeout(() => {
    if (loaderOverlay) {
      loaderOverlay.classList.add("hidden");
      // Remove from DOM after transition
      setTimeout(() => {
        loaderOverlay.style.display = "none";
      }, 500);
    }
  }, 2000);
});

// Certificate Image Modal Logic
let currentZoom = 1;
const certModal = document.getElementById("certModal");
const certModalImage = document.getElementById("certModalImage");
const certModalTitle = document.getElementById("certModalTitle");
const certModalClose = document.querySelector(".cert-modal-close");
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

// Add click event to all certificate images
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cert-image-clickable")) {
    const imageSrc = e.target.src;
    const imageTitle = e.target.getAttribute("data-title") || "Certificate";
    
    certModalImage.src = imageSrc;
    certModalTitle.textContent = imageTitle;
    currentZoom = 1;
    certModalImage.style.transform = `scale(${currentZoom})`;
    
    certModal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
});

// Close modal functionality
function closeCertModal() {
  certModal.classList.remove("show");
  document.body.style.overflow = "auto"; // Restore scrolling
  currentZoom = 1;
  certModalImage.style.transform = `scale(${currentZoom})`;
}

if (certModalClose) {
  certModalClose.addEventListener("click", closeCertModal);
}

// Close modal when clicking outside the image
if (certModal) {
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
      closeCertModal();
    }
  });
}

// Zoom functionality
if (zoomInBtn) {
  zoomInBtn.addEventListener("click", () => {
    currentZoom = Math.min(currentZoom + 0.25, 3); // Max zoom 3x
    certModalImage.style.transform = `scale(${currentZoom})`;
  });
}

if (zoomOutBtn) {
  zoomOutBtn.addEventListener("click", () => {
    currentZoom = Math.max(currentZoom - 0.25, 0.5); // Min zoom 0.5x
    certModalImage.style.transform = `scale(${currentZoom})`;
  });
}

if (resetZoomBtn) {
  resetZoomBtn.addEventListener("click", () => {
    currentZoom = 1;
    certModalImage.style.transform = `scale(${currentZoom})`;
  });
}

// Keyboard navigation for modal
document.addEventListener("keydown", (e) => {
  if (certModal && certModal.classList.contains("show")) {
    switch(e.key) {
      case "Escape":
        closeCertModal();
        break;
      case "+":
      case "=":
        if (zoomInBtn) zoomInBtn.click();
        break;
      case "-":
        if (zoomOutBtn) zoomOutBtn.click();
        break;
      case "0":
        if (resetZoomBtn) resetZoomBtn.click();
        break;
    }
  }
});
