    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        let icon = document.getElementById("darkIcon");

        if (document.body.classList.contains("dark-mode")) {
            // ডার্ক মোড চালু → সূর্য দেখাবে
            icon.src = "https://christosangeetpro.github.io/presenter/presenter-app/img/ic_dark_sun.png";
            localStorage.setItem("theme", "dark");
        } else {
            // লাইট মোড → চাঁদ দেখাবে
            icon.src = "https://christosangeetpro.github.io/presenter/presenter-app/img/ic_dark_moon.png";
            localStorage.setItem("theme", "light");
        }
    }

    // রিলোড করলে আগের থিম মনে রাখবে
    window.onload = function () {
        let icon = document.getElementById("darkIcon");
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            icon.src = "https://christosangeetpro.github.io/presenter/presenter-app/img/ic_dark_sun.png";
        }
    };