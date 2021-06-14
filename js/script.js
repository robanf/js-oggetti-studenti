var studente={
    nome:"roberto",
    cognome:"anfuso",
    eta:"23"
};

console.log("mio primo oggetto studente");
for(var x in studente){

    console.log(studente[x]);
}


var classe=[
    {
        nome:"roberto",
        cognome:"anfuso",
        eta:"23"
    },
    {
        nome:"maurizio",
        cognome:"rossi",
        eta:"45"
    },
    {
        nome:"benito",
        cognome:"verdi",
        eta:"34"
    }

];
console.log("stampo il mio array di studenti");
for(var x in classe){
    console.log(classe[x].nome);
    console.log(classe[x].cognome);
}


var newstudente={
    nome:prompt("nome"),
    cognome:prompt("cognome"),
    eta:prompt("eta")
};

classe.push(newstudente);
console.log("stampo il mio array + il nuovo studente")

for(var x in classe){
    console.log(classe[x]);
}