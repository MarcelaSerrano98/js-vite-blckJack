import {pedirCarta } from './pedir-carta';
import {valorCarta } from './valor-carta';

/**
 * 
 * 
 * @param {number} puntosMinimos 
 * @param {HTMLElement} puntosHTML 
 * @param {divCartasComputadora} divCartasComputadora 
 * @param {Array<string>} deck
*/

export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck  = []) => {

    
    
    if (!puntosMinimos) throw new Error ('Puntos minimos es necesario')
        if (!deck) throw new Error ('El deck es necesario');
    if (!puntosHTML) throw new Error ('Argumento puntosHTML es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}