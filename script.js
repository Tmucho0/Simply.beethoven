let Synth = import("https://unpkg.com/tone@14.7.77/build/eTone.js");
const synth = new Tone.Synth().toDestination();

//blancas menores y mayores
const Doblanca = document.getElementById("DoB");
Doblanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("C4", "4n");
});

const Reblanca = document.getElementById("ReB");
Reblanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("D4", "8n");   
});

const Miblanca = document.getElementById("MiB");
Miblanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("E4", "8n");
});

const Fablanca = document.getElementById("FaB");
Fablanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("F4", "8n");
});


const Solblanca = document.getElementById("SolB");
Solblanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("G4", "8n");
});

const Lablanca = document.getElementById("LaB");
Lablanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("A4", "8n");
});

const Siblanca = document.getElementById("SiB");
Siblanca.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("B4", "8n");
});

const Doblanca1 = document.getElementById("DoBM");
Doblanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("C5", "8n");
});

const Reblanca1 = document.getElementById("ReBM");
Reblanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("D5", "8n");
});

const Miblanca1 = document.getElementById("MiBM");
Miblanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("E5", "8n");
});

const Fablanca1 = document.getElementById("FaBM");
Fablanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("F5", "8n");
});

const Solblanca1 = document.getElementById("SolBM");
Solblanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("G5", "8n");
});

const Lablanca1 = document.getElementById("LaBM");
Lablanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("A5", "8n");
});

const Siblanca1 = document.getElementById("SiBM");
Siblanca1.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("B5", "8n");
});

//negras mayores y menores
const DoNegra = document.getElementById("DoNegra");
DoNegra.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("B#4 ", "8n");
});

const ReNegra = document.getElementById("ReNegra");
ReNegra.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("D#4", "8n"); 
});

const FaNegra = document.getElementById("FaNegra");
FaNegra.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("F#4", "8n"); 
});

const SolNegra = document.getElementById("SolNegra");
SolNegra.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("G#4", "8n"); 
});

const LaNegra = document.getElementById("LaNegra");
LaNegra.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("A#4", "8n"); 
});

const DoNegraM = document.getElementById("DoNegraM");
DoNegraM.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("B#5 ", "8n");
});

const ReNegraM = document.getElementById("ReNegraM");
ReNegraM.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("D#5", "8n"); 
});

const FaNegraM = document.getElementById("FaNegraM");
FaNegraM.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("F#5", "8n"); 
});

const SolNegraM = document.getElementById("SolNegraM");
SolNegraM.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("G#5", "8n"); 
});

const LaNegraM = document.getElementById("LaNegraM");
LaNegraM.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("A#5", "8n"); 
});


$(document).ready(function () {
    $('.js-example-basic-single').select2();
});
