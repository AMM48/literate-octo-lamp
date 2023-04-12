function changeDisplay(e) {
  let main = document.getElementById("main-card");
  let prelims = document.getElementById("prelims");
  let earlyPrelims = document.getElementById("early-prelims");
  let selector = document.getElementById("card");

  if (selector.value === "Main-Card") {
    main.classList.remove("hidden");
    prelims.classList.add("hidden");
    earlyPrelims.classList.add("hidden");
  } else if (selector.value === "Prelims") {
    main.classList.add("hidden");
    prelims.classList.remove("hidden");
    earlyPrelims.classList.add("hidden");
  } else if (selector.value === "Early-Prelims") {
    main.classList.add("hidden");
    prelims.classList.add("hidden");
    earlyPrelims.classList.remove("hidden");
  } else {
    main.classList.remove("hidden");
    prelims.classList.remove("hidden");
    earlyPrelims.classList.remove("hidden");
  }
}
// Get the input element for search
var fightSearch = document.getElementById("fightSearch");

// Add event listener for input event
fightSearch.addEventListener("input", function () {
  var input = fightSearch.value.toLowerCase();
  var containers = document.getElementsByClassName("container");

  // Loop through all containers and hide/show based on search input
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var text = container.textContent || container.innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      container.style.display = "";
    } else {
      container.style.display = "none";
    }
  }
});
