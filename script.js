setInterval(function() {
    const date = new Date();

    const shortcutFormatter = Intl.DateTimeFormat("hu-HU", { timeZone: "Europe/Budapest", hour: "numeric", minute: "numeric", second: "numeric" });
    datum = shortcutFormatter.format(date)

    document.getElementById("timeH").innerHTML = datum.split(":")[0].length == 1 ? `0${datum.split(":")[0]}` : `${datum.split(":")[0]}`;
    document.getElementById("timeM").innerHTML = datum.split(":")[1].length == 1 ? `:0${datum.split(":")[1]}` : `:${datum.split(":")[1]}`;
    document.getElementById("timeS").innerHTML = datum.split(":")[2].length == 1 ? `:0${datum.split(":")[2]}` : `:${datum.split(":")[2]}`;

    if (parseInt(datum.split(":")[0]) >= 6 && parseInt(datum.split(":")[0]) < 12) {
        document.body.style.backgroundImage = "url('src/morning.png')";
        document.getElementById("dayTimeImg").setAttribute("src", "src/sun.svg");
        document.getElementById("dayTime").innerHTML = "MORNING";
    } else if (parseInt(datum.split(":")[0]) >= 12 && parseInt(datum.split(":")[0]) < 20) {
        document.body.style.backgroundImage = "url('src/afternoon.png')";
        document.getElementById("dayTimeImg").src = "src/sun.svg";
        document.getElementById("dayTime").innerHTML = "AFTERNOON";
    } else {
        document.body.style.backgroundImage = "url('src/night.png')";
        document.getElementById("dayTimeImg").src = "src/moon.svg";
        document.getElementById("dayTime").innerHTML = "NIGHT";
    }
}, 1000)

function generateQ() {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
        let q = data[Math.floor(Math.random()*data.length)]
        document.getElementById("qText").innerHTML = q.text;
        document.getElementById("qAuthor").innerHTML = q.author;
    })
}

generateQ();