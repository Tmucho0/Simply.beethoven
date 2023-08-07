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
    synth.frequency.value = "D#4";
    const armonizacion = [0, 4, 7, 12, 16, 19, 24];
    for (const interval of armonizacion) {
        const notaArmonizada = synth.frequency.value + interval;
        synth.triggerAttackRelease(notaArmonizada, "4n");
        await new Promise(resolve => setTimeout(resolve, 500)); 
    }

    console.log("holitas");
});


//Actividad a hacer:Representar la formula de la escala mayor en codigo, lo mismo con la escala menor.... Vamo que se puede kbaiero
playButtom.addEventListener("click", async () => {
});


$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

