let Synth = import("https://unpkg.com/tone@14.7.77/build/eTone.js");
const synth = new Tone.Synth().toDestination();
const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"]
const notesnegras = ["C#5", "D#5", "F#5", "G#5", "A#5", "B#5", "C#6", "D#6", "F#6", "G#6", "A#6", "B#6"]
const Escalas = document.getElementsByClassName("Escala")
const Blancas = document.getElementsByClassName("white-key");
const Negras = document.getElementsByClassName("black-key");

for (let i = 0; i < Blancas.length; i++) {
    Blancas[i].addEventListener("click", function() {
        synth.triggerAttackRelease(notes[i], "16n");
    });
}

for (let i = 0; i < Negras.length; i++) {
    Negras[i].addEventListener("click", function() {
        synth.triggerAttackRelease(notesnegras[i], "16n");
    });
}

    const playButtom = document.getElementById("BotonDePlay");
    playButtom.addEventListener("click", async () => {
        const RootNote = document.getElementById("Root-note");
        const EscalaMAYME = document.getElementById("Escalas");
        const Escala = EscalaMAYME.value;
        synth.frequency.value = RootNote.value;
        if (Escala === "Escala-Mayor") {
            let armonizaciond = [0, 8, 10, 20, 21, 23, 24];
            for (const i of armonizaciond) {
                const notaArmonizada = synth.frequency.value * Math.pow(2, i / 120);
                synth.triggerAttackRelease(notaArmonizada, "16n");
                await new Promise(resolve => setTimeout(resolve, 1250));
            }
        }
        else if (Escala === "Escala-Menor") {
            const armonizacionMenor = [0, 7, 10, 19, 21, 22, 23];
            const armonizacionInversa = armonizacionMenor;
            for (const i of armonizacionInversa) {
                const notaArmonizada = synth.frequency.value * Math.pow(2, i / -100);
                synth.triggerAttackRelease(notaArmonizada, "16n");
                await new Promise(resolve => setTimeout(resolve, 230));
            }
        }
        let rootNoteValue = RootNote.value;
        if (rootNoteValue.includes("#")) {
            synth.frequency.value = rootNoteValue;
            
            if (Escala === "Escala-Negras") {
                const armonizacionNotaNegra = [1, 3, 6, 8, 10];
                for (const note of armonizacionNotaNegra) {
                    const notaArmonizada = synth.frequency.value * Math.pow(2, note / 12);
                    synth.triggerAttackRelease(notaArmonizada, "16n");
                    await new Promise(resolve => setTimeout(resolve, 230));
                }
            }
        }
    });


$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

