let i = 0;

document
    .querySelector(".header__picture")
    .addEventListener("click", function () {
        if (i === 0) {
            document.querySelector(".ul").style.display = "flex";
            i++;
        } else if (i === 1) {
            document.querySelector(".ul").style.display = "none";
            i--;
        }
    });
