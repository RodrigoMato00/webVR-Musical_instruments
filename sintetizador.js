  AFRAME.registerComponent('synth', {
    schema: {
      note: {
        type: 'string',
        default: 'C4',
      },
      duration: {
        type: 'string',
        default: '8n',
      },
    },
    init: function () {
      this.el.addEventListener('fusing', this.trigger.bind(this))
    },
    trigger: function () {
      synth.triggerAttackRelease(this.data.note, this.data.duration)
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  })

//efecto FeedbackDelay, que repite cada corchea con un 80% de feedback
const delay = new Tone.FeedbackDelay('8n', 0.8)
// encendido en un volumen ajustado a -12dB y luego a la salida Master
.chain(new Tone.Volume(-12), Tone.Master)

// filtro de paso bajo con una frecuencia de 1500 Hz
const filter = new Tone.Filter(1500, 'lowpass')
// La señal se envía tanto al Delay como al Master
.connect(delay)
.toMaster()

// sintetizador
const synth = new Tone.Synth({
volume: -12, // volumen del oscilador ajustado a -12dB
oscillator: {
  type: 'square', // tipo de oscilador a onda cuadrada
},
envelope: {
  attack: 0.02, // ajuste a 20ms
  release: 1, // realse ajustado a 1s
},
}).connect(filter) // conectar la salida del sintetizador al filtro