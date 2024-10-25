let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['Jogger', 'racoon', 'azores', 'telecom', 'cyborg'];
let domain = ['com', 'es', 'org'];

for (let p = 0; p < pronoun.length; p++) { 
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let d = 0; d < domain.length; d++) {
                
               // Creo una variable para poder trabajar más cómodo
                let modifiedNoun = noun[n];
                
                // Si el noun termina con exactamente el dominio, elimina las letras de la longitud del dominio
                // Asi queda la variable limpia para añadirle luego el punto y el dominio que toque
                if (modifiedNoun.endsWith(domain[d])) {
                    modifiedNoun = modifiedNoun.slice(0, -domain[d].length);
                }
                
                console.log(pronoun[p] + adj[a] + modifiedNoun + "." + domain[d]);
            }               
        }
    } 
}

// node app.js
