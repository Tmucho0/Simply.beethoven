let Synth = import("https://unpkg.com/tone@14.7.77/build/eTone.js");
const synth = new Tone.Synth().toDestination();
const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"]
const notesnegras = ["C#5", "D#5", "F#5", "G#5", "A#5", "B#5", "C#6", "D#6", "F#6", "G#6", "A#6", "B#6"]
const Escalas = document.getElementsByClassName("Escala")
const Blancas = document.getElementsByClassName("white-key");
const Negras = document.getElementsByClassName("black-key");

for (let i = 0; i < Blancas.length; i++) {
    Blancas[i].addEventListener("click", function() {
        synth.triggerAttackRelease(notes[i], "4n");
    });
  }

for (let i = 0; i < Negras.length; i++) {
    Negras[i].addEventListener("click", function() {
        synth.triggerAttackRelease(notesnegras[i], "4n");
    });
}

const playButtom = document.getElementById("BotonDePlay");
playButtom.addEventListener("click", async () => {
    const RootNote = document.getElementById("Root-note");
    const EscalaMAYME = document.getElementById("Escalas");
    const Escala = EscalaMAYME.value;
    synth.frequency.value = RootNote.value;

    if (Escala === "Escala-Mayor") {
        const armonizacion = [0, 2, 4, 5, 7, 9, 11];
        for (const i of armonizacion) {
            const notaArmonizada = synth.frequency.value * Math.pow(2, i / 8);
            synth.triggerAttackRelease(notaArmonizada, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));

        }
    }
    else if(Escala === "Escala-Menor") {
        const armonizacion = [0, 2, 3, 5, 7, 8, 10];
        for (const i of armonizacion) {
            const notaArmonizada = synth.frequency.value * Math.pow(2, i / 8);
            synth.triggerAttackRelease(notaArmonizada, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));

        }
    }
});
const playButtom2 = document.getElementById("BotonDePlay2");
playButtom2.addEventListener("click", async () => {
    const escalaSelect = document.getElementById("Escalas2").value;
    if (escalaSelect === "Escala-Mayor2") {
        const armonizacion = [0, 4, 7, 12];
        for (const i of armonizacion) {
            const notaArmonizada = synth.frequency.value * Math.pow(2, i / 12);
            synth.triggerAttackRelease(notaArmonizada, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    } else if (escalaSelect === "Escala-Menor2") {
        const armonizacion = [0, 3, 7, 12];
        for (const i of armonizacion) {
            const notaArmonizada = synth.frequency.value * Math.pow(2, i / 12);
            synth.triggerAttackRelease(notaArmonizada, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
});




//Actividad a hacer:Representar la formula de la escala mayor en codigo, lo mismo con la escala menor.... Vamo que se puede kbaiero
playButtom.addEventListener("click", async () => {
});


$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

