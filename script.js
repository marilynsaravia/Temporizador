let tiempoRestante;
let intervalId;
    function inicializar() {
        const hora = parseInt(prompt("Ingrese la hora (0-23):") || 0, 10);
        const minuto = parseInt(prompt("Ingrese el minuto (0-59):") || 0, 10);
        const segundo = parseInt(prompt("Ingrese el segundo (0-59):") || 0, 10);

        if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
            alert("Por favor, ingrese valores numéricos válidos.");
            return;
        }

        tiempoRestante = hora * 3600 + minuto * 60 + segundo;
        actualizarTemporizador();
        clearInterval(intervalId);
    }

    function iniciar() {
        if (tiempoRestante > 0) {
            intervalId = setInterval(function () {
                if (tiempoRestante === 0) {
                    abrirNuevaVentana();
                    clearInterval(intervalId);
                } else {
                    tiempoRestante--;
                    actualizarTemporizador();
                }
            }, 1000);
        } else {
            alert("Por favor, inicialice el temporizador primero.");
        }
    }

    function actualizarTemporizador() {
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60);
        const segundos = tiempoRestante % 60;

        document.getElementById("timer").innerHTML = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
    }

    function abrirNuevaVentana() {
       const nuevaVentana = window.open("", "_blank", "width=100,height=100");
        nuevaVentana.document.write("<p>Tiempo finalizado</p>");
    }

    function formatoDosDigitos(valor) {
        return valor < 10 ? "0" + valor : valor;
    }
