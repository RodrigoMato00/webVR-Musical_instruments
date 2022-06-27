// Sintetizador
const synth = new Tone.Synth({
    volume: -12, // volumen del oscilador ajustado a -12dB
    oscillator: {
      type: 'square', // tipo de oscilador a onda cuadrada
    },
    envelope: {
      attack: 0.02, //ajuste a 20ms
      release: 1, // realse ajustado a 1s
    },
  }).toMaster() //conectar la salida del sintetizador al filtro

  //indicar al sintetizador que reproduzca la nota Do3 durante 8
  synth.triggerAttackRelease('C3', '8n')