document.getElementById("burger-menu").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if(menu.style.display == "flex") {
        menu.style.display = "none";
        document.getElementsByClassName("header-bottom-border")[0].style.borderBottom = "none";
    }

        else {
            menu.style.display = "flex";
            document.getElementsByClassName("header-bottom-border")[0].style.borderBottom = "1px solid black";
        }
 
});




document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});

