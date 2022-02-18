let paises = [];

paises.push('Brasil', 'Argentina', 'Colombia','Peru','Chile', 'Equador', 'Bosnia', 'Venezuela', 'Bolívia', 'Uruguai', 'Guiana', 'Suriname', 'Paraguai', 'Guiana Francesa');

//Forma tradicional
for (let i = 0; i <= paises.length; i++){
    console.log(paises[i]);
}

//Itera 
paises.forEach((pais) => {
    return console.log(pais)
})

//Iterar sobre array
for (let pais of paises){
    console.log(pais)
}