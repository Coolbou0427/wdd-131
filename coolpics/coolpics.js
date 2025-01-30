document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const menu = document.querySelector("#nav");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("hide");
    });

    function handleResize() {
        const menu = document.querySelector("#nav");
        if (!menu) return;

        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    function viewerTemplate(pic, alt) {
        return `<div class="viewer show"> 
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }

    function viewHandler(event) {
        if (event.target.tagName === "IMG") {
            const imgSrc = event.target.src.includes("-sm.jpeg") 
                ? event.target.src.replace("-sm.jpeg", "-full.jpeg") 
                : event.target.src;
            const imgAlt = event.target.alt;

            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, imgAlt));
        }
    }

    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-viewer")) {
            const viewer = event.target.closest(".viewer");
            if (viewer) {
                viewer.remove();
            }
        }
    });

    const gallery = document.querySelector(".gallery");
    if (gallery) {
        gallery.addEventListener("click", viewHandler);
    } else {
        console.error("Error: .gallery element not found in the DOM.");
    }
});
