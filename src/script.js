import "https://unpkg.com/tone@14.7.77/build/Tone.js";

const btn = document.getElementById("Holitas");
btn.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");    
});

// script.js

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});
