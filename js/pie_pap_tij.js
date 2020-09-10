let puntajeUsuario = 0;
let puntajeCpu = 0;

const puntoUsuario_span = document.getElementById('user');
const puntoCpu_span = document.getElementById('cpu');
const reiniciar = document.getElementById("restaurar");
const resultado_div = document.getElementById('resultado');
const puntajes_div = document.querySelector('puntajes__contenedor');
const piedra_div = document.getElementById('pi');
const papel_div = document.getElementById('pa');
const tijera_div = document.getElementById('ti');

function ppt_cpu(){
    var ppt_opsiones = ['piedra', 'papel', 'tijera'];
    var numeroAleatorio = Math.floor(Math.random() * 3);
    return ppt_opsiones[numeroAleatorio];
}

function ganador(armaUsuario, armaCpu){
    puntajeUsuario++;
    puntoUsuario_span.innerHTML = puntajeUsuario;
    puntoCpu_span.innerHTML = puntajeCpu;
    resultado_div.innerHTML = '<h2 class="ganador">Eres campeón de la partida!!!</h2><p>Jugaste <strong>' + armaUsuario + '</strong> contra <strong>' + armaCpu + '</strong> del CPU</p>';
}

function perdedor(armaUsuario, armaCpu){
    puntajeCpu++;
    puntoUsuario_span.innerHTML = puntajeUsuario;
    puntoCpu_span.innerHTML = puntajeCpu;
    resultado_div.innerHTML = '<h2 class="perdedor">Sigue intentando, no te rindas!</h2><p>Elegiste <strong>' + armaUsuario + '</strong> contra <strong>' + armaCpu + '</strong> del CPU</p>';
}

function empate(armaUsuario, armaCpu){
    puntoUsuario_span.innerHTML = puntajeUsuario;
    puntoCpu_span.innerHTML = puntajeCpu;
    resultado_div.innerHTML = '<h2 class="empate">Enpataron la partida. Vé por el desempate!</h2><p>Jugaste <strong>' + armaUsuario + '</strong> y el CPU tambien jugo <strong>' + armaCpu + '</strong></p>';
}

function partida(armaUsuario){
   const armaCpu = ppt_cpu();
    switch(armaUsuario + armaCpu){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            ganador(armaUsuario, armaCpu);
            break;
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            perdedor(armaUsuario, armaCpu);
            break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            empate(armaUsuario, armaCpu);
            break;
    } 
}

function main(){
    piedra_div.addEventListener('click', () => partida("piedra"));
    
    papel_div.addEventListener('click', () => partida("papel"));
    
    tijera_div.addEventListener('click', () => partida("tijera"));
}

function reiniciarjuego(){
    puntajeUsuario = 0;
    puntajeCpu = 0;
    puntoUsuario_span.innerHTML = puntajeUsuario;
    puntoCpu_span.innerHTML = puntajeCpu;
    resultado_div.innerHTML = '';
}

reiniciar.addEventListener('click', reiniciarjuego);
main();