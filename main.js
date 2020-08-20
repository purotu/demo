const kaveri = [];

let x = prompt('Kuinka monta kaveria?', '5');

for (let i=0; i < x; i++){
    let lukum = i+1;
    let nimi = prompt('Anna kaverin ' + lukum + ' nimi...');
    kaveri.push(nimi);
}

