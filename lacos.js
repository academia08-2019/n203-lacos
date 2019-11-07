let lista = ["elemento 1", "elemento 2", "elemento 3", "elemento 4", "elemento 5"];
let contador = 0; 

while(contador < lista.length){
    console.log(lista[contador]);
    contador++;
}

for(let indice = 0; indice < lista.length; indice++){
    console.log(lista[indice]);
}

for(let indice in lista){
    console.log(lista[indice]);
}

for(let elemento of lista){
    console.log(elemento);
}



let animes = ["Boku no Hero", "Naruto", "Death Note", "Kimi no na wa", "Cavaleiros do Zodíaco", "Dragon Ball Z", "Super Campeões"];

for(let i = 0; i < animes.length; i++){
    console.log(i);
}

for(let i = 0; i < animes.length; i++){
    console.log(animes[i]);
}

for(let indice in animes){
    console.log(animes[indice]);
}

for(let anime of animes){
    console.log(anime);
}

