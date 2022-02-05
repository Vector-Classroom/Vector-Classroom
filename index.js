const hamberger = document.querySelector(".hamberger");
            const menuList = document.querySelector(".menuList");

            hamberger.addEventListener("click", () => {
                hamberger.classList.toggle("active");
                menuList.classList.toggle("active");
            })