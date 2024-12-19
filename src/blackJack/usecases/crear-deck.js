import _ from'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tipoEspeciales 
 * @returns {Array<string> } retorna un nuevo deck.
 */

export const crearDeck = (tiposDeCarta,tipoEspeciales) => {
   
    if (!tiposDeCarta || tiposDeCarta.length === 0 )
        
        throw new Error ('TipoDeCartas es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoEspeciales ) {
        for( let esp of tipoEspeciales) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

