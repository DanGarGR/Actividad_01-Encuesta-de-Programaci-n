const inst = {
    data() {
        return {
            gustaProgramar: '',
            aniosProgramando: 0,
            experiencia: '',
            nuevoLenguaje: '',
            lenguajes: [],
            mostrarResultado: false,
            estado: true,
            cambio: 'Ocultar'
        };
    },
    methods: {
        agregarLenguaje() {
            if (this.nuevoLenguaje) {
                this.lenguajes.push(this.nuevoLenguaje);
                this.nuevoLenguaje = '';
            }
        },
        mostrarResultados() {
            this.mostrarResultado = true;
        },
        cambiar() {
            this.estado = !this.estado;
            this.cambio = this.estado ? 'Ocultar' : 'Mostrar';
        }
    }
};

const app = Vue.createApp(inst).mount('#componente');
