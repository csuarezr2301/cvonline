document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

function showSection(id) {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.add("hidden"));
}

function goBackToStart() {
  document.getElementById("main-content").classList.add("hidden");
  document.getElementById("start-screen").style.display = "flex";
}
