
let lamp = document.getElementById("lamp");
let glow = document.getElementById("glow");

let isOn = false;

lamp.addEventListener("click", () => {
    isOn = !isOn;

    glow.classList.toggle("on", isOn);
});


