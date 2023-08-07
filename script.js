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

//Actividad a hacer:Representar la formula de la escala mayor en codigo, lo mismo con la escala menor.... Vamo que se puede kbaiero

const playButtom = document.getElementById("playButtom");
playButtom.addEventListener("click", async() => {
    if (Escalas[0]) {
        for (let i = 0; i < Blancas.length; i++) {
            await Tone.start()
            synth.triggerAttackRelease(notes[i], "8n");
        }
    } else{
        for (let i = 0; i < Blancas.length - 1; i--) {
            synth.triggerAttackRelease(notes[i], "8n");
        }
    }
})

playButtom.addEventListener("click", async () => {
    await Tone.start();
    synth.triggerAttackRelease("C4", "8n");
    //synth.triggerAttackRelease("C#4 ", "8n", + 0.5);
    synth.triggerAttackRelease("D4", "8n", + 1);
    //synth.triggerAttackRelease("D#4", "8n", + 1.5);
    synth.triggerAttackRelease("E4", "8n", + 1.5);
    synth.triggerAttackRelease("F4", "8n", +2);
    //synth.triggerAttackRelease("F#4", "8n", + 3);
    synth.triggerAttackRelease("G4", "8n", + 2.5);
    //synth.triggerAttackRelease("G#4", "8n", + 4);
    synth.triggerAttackRelease("A4", "8n", + 3);
    //synth.triggerAttackRelease("A#4", "8n", + 5);
    synth.triggerAttackRelease("B4", "8n", + 3.5);
    synth.triggerAttackRelease("C5", "8n", + 4);
    //synth.triggerAttackRelease("C#5", "8n", + 6.5);
    synth.triggerAttackRelease("D5", "8n", + 4.5);
    //synth.triggerAttackRelease("D#5", "8n", + 7.5);
    synth.triggerAttackRelease("E5", "8n", + 5);
    synth.triggerAttackRelease("F5", "8n", + 5.5);
    //synth.triggerAttackRelease("F#5", "8n", + 9);
    synth.triggerAttackRelease("G5", "8n", + 6);
    //synth.triggerAttackRelease("G#5", "8n", + 10);
    synth.triggerAttackRelease("A5", "8n", + 6.5);
    //synth.triggerAttackRelease("A#5", "8n", + 11);
    synth.triggerAttackRelease("B5", "8n", + 7);
});

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

