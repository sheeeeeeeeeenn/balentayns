document.addEventListener("DOMContentLoaded", function () {
            function countdown() {
                const eventDate = new Date("February 14, 2025 00:00:00").getTime();
                setInterval(() => {
                    const now = new Date().getTime();
                    const distance = eventDate - now;
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById("countdown").innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                }, 1000);
            }

            countdown();

            const valentineButton = document.getElementById("valentineButton");
            const noButton = document.getElementById("noButton");

            valentineButton.addEventListener("click", function () {
                document.getElementById("catAnimation").classList.remove("hidden");
                document.getElementById("catAnimation").classList.add("show");
                noButton.style.display = "none";
            });

            function moveButton() {
                const x = Math.random() * (window.innerWidth - noButton.clientWidth);
                const y = Math.random() * (window.innerHeight - noButton.clientHeight);
                noButton.style.position = "absolute";
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            }

            noButton.addEventListener("mouseover", moveButton);
            noButton.addEventListener("click", moveButton);
        });

        function createFloatingHeart() {
            const heart = document.createElement("div");
            heart.classList.add("floating-heart");
            heart.innerHTML = "❤";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }

        document.getElementById("valentineButton").addEventListener("click", function () {
            document.querySelector("h1").innerHTML = "SEE YOU ON FEBRUARY 14! :))";
            document.getElementById("happySong").play();
            for (let i = 0; i < 20; i++) {
                setTimeout(createFloatingHeart, i * 200);
            }
        });