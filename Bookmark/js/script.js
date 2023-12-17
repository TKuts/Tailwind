const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTanClick));

function onTanClick(event) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Deactivate all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the targer
  event.target.classList.add("border-softRed", "border-b-4");

  const classString = event.target.getAttribute("data-target");

  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
