function markComplete() {
  localStorage.setItem("webdevCourse", "Completed");
  alert("Course marked as completed!");
}

window.onload = function () {
  const progressText = document.getElementById("status");
  if (progressText) {
    const progress = localStorage.getItem("webdevCourse");
    progressText.textContent = progress ? progress : "Not Completed";
  }
};
