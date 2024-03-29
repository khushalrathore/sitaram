function toggleMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
document.body.addEventListener("click", function (event) {
  var menu = document.getElementById("mobile-menu");
  var target = event.target;
  if (menu.contains(target)) {
    return;
  }
  var menus = document.querySelectorAll(".mobile-menu-ul");
  menus.forEach(function (menu) {
    menu.style.display = "none";
  });
});
function toggleList(listId) {
  let list = document.getElementById("job-title-hides-this");
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
var heroElements = document.querySelectorAll('.hero');

heroElements.forEach(function(hero) {
    hero.style.padding = '3rem';
});
}
document.addEventListener("DOMContentLoaded", function() {
    // Function to change the content of the element
    function changeContent(newContent) {
        const paragraph = document.querySelector('.get-in-touch-paragraph');
        if (paragraph) {
            paragraph.textContent = newContent;
        }
    }

    // Example usage: Change the content to "Contact us now for more information!"
    changeContent("Global Office, Govindpura, Jaipur(302012), Rajasthan");
});
document.querySelectorAll('.get-in-touch-paragraph').forEach(element => {
    element.style.margin = '1rem 0';
});
