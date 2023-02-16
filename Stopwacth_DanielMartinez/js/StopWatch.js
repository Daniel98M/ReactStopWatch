window.onload = function stopwatch() { //onload(event):Activa el evento cuando la pagina se ha cargado

    var segundos = 00; //Declara las variables y las inicializa
    var centecimas = 00; 
    var centiSum = document.getElementById("centesima")// Llama y asocia a las tags del HTML
    var secSum = document.getElementById("segundos")
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Intervalo; //Almacena el ID devuelto por setInterval

    function start() { //Inicia el Stopwatch
      clearInterval(Intervalo); /*Borra el temporizador configurado con setInterval(), recibe como parametro 
      el ID generado por setInterval() */
      Intervalo = setInterval(contador, 10); /*setInterval: Ejecuta continueamente una funcion en un intervalo 
      de 'n' milisegundos.*/

      //Nota:setTimeOut() funciona de manera similar a setInterval(), pero ejecuta la funcion una unica vez.
    }

    function stop() { //Pausa el Stopwatch
      clearInterval(Intervalo); 
    }

    function reset() { //Detiene y reinicia el Stopwatch
      clearInterval(Intervalo);
      centecimas = "00"; //Devuelve las variables a sus Estados Iniciales
      segundos = "00";
      centiSum.innerHTML = centecimas; //Cambia el texto dentro del HTML
      secSum.innerHTML = segundos; //Cambia el texto dentro del HTML
    }

    function contador () {
      centecimas++; //Aumenta en 1 a centesimas
      
      if(centecimas <= 9){
        centiSum.innerHTML = "0" + centecimas; /*Cambia el texto dentro del HTML, evitando que se cambie }
        el formato, ejemplo: muestra 01 y no 1.*/
      }
      
      if (centecimas > 9){
        centiSum.innerHTML = centecimas;
      } 
      
      if (centecimas > 99) {
        segundos++; //Aumenta en 1 a segundos
        secSum.innerHTML = "0" + segundos;
        centecimas = 0; //Reinicia la variabale de conteo centesimas.
        centiSum.innerHTML = "0" + centecimas;
      }
      
      if (segundos > 9){
        secSum.innerHTML = segundos;
      }
    
    }
  
    buttonStart.onclick = start;
    buttonStop.onclick = stop;
    buttonReset.onclick = reset;
    
    
    
  }