//Define Global Variables
const allsec = document.querySelectorAll("section");
const list = document.getElementById("navbar__list");
const btn = document.getElementById("myBtn");

//started a function to create the navbar 
function createList() {
  for (let i = 0; i < allsec.length; i++) {
    let newList = document.createElement("li");
    newList.innerHTML = `<li id="nav${i + 1}" data-nav="section${
      i + 1
    }" class="menu__link">section ${i + 1}</li>`;
    list.appendChild(newList);
  }
}
createList();

const navlist = document.querySelectorAll(".menu__link");

//adds a class of  (your-active-class) and (highlight) to the targeted element
function activ() {
  allsec.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -230 &&
      section.getBoundingClientRect().top <= 150
    ) {
      section.classList.add("your-active-class");
      navlist.forEach((item) => {
        item.classList.remove("highlight");
        if (
          section.getAttribute("data-nav") === item.getAttribute("data-nav")
        ) {
          item.classList.add("highlight");
        }
      });
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

document.addEventListener("scroll", activ);

// when an element is clicked scroll into view
navlist.forEach((elem) => {
  elem.addEventListener("click", (act) => {
    act.preventDefault();

    let toact = document.getElementById(elem.getAttribute("data-nav"));
    toact.scrollIntoView({ behavior: "smooth" });
  });
});

// a button when clicked scroll to top
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//hides /shows the button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
