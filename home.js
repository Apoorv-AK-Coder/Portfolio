function mufun() {
    let b1 = document.getElementById("about");
    let b2 = document.getElementById("skills");
    let b3 = document.getElementById("education");
    let b4 = document.getElementById("experience");
    let b5 = document.getElementById("work");
    let b6 = document.getElementById("contact");

    b1.addEventListener("click", function () {
        if ((b1.style.display = "none")) {
            b1.style.display = "block";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "none";
            b5.style.display = "none";
            b6.style.display = "none";

        }
    })

    b2.addEventListener("click", function () {
        if ((b2.style.display = "none")) {
            b1.style.display = "none";
            b2.style.display = "block";
            b3.style.display = "none";
            b4.style.display = "none";
            b5.style.display = "none";
            b6.style.display = "none";

        }
    })

    b3.addEventListener("click", function () {
        if ((b3.style.display = "none")) {
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "block";
            b4.style.display = "none";
            b5.style.display = "none";
            b6.style.display = "none";

        }
    })

    b4.addEventListener("click", function () {
        if ((b4.style.display = "none")) {
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "block";
            b5.style.display = "none";
            b6.style.display = "none";

        }
    })

    b5.addEventListener("click", function () {
        if ((b5.style.display = "none")) {
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "none";
            b5.style.display = "block";
            b6.style.display = "none";

        }
    })

    b6.addEventListener("click", function () {
        if ((b6.style.display = "none")) {
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "none";
            b5.style.display = "none";
            b6.style.display = "block";

        }
    })
}