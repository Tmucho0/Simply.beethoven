import "https://unpkg.com/tone@14.7.77/build/Tone.js";
"C4", // Do
"D4", // Re
"E4", // Mi
"F4", // Fa
"G4", // Sol
"A4", // La
"B4" // Si
const Doblanca = document.getElementById("DoB");
Doblanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");    
});

const Reblanca = document.getElementById("ReB");
Reblanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");   
});

const Miblanca = document.getElementById("MiB");
Miblanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
});

const Fablanca = document.getElementById("FaB");
Fablanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
});


const Solblanca = document.getElementById("SolB");
Solblanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
});

const Lablanca = document.getElementById("LaB");
Lablanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
});

const Siblanca = document.getElementById("SiB");
Siblanca.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
});

const Doblanca1 = document.getElementById("DoBM");
Doblanca1.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
});

// script.js

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});
