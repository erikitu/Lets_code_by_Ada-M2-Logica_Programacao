/*
Criar um dicionário de sinônimos usando Map 
Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre", 
"contente", "satisfeito"]
dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido", 
"deprimido"],
dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"],

*/
const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set(feliz, ['alegre', 'contente', 'satisfeito']);
dicionarioDeSinonimos.set(triste, ['melancólico', 'abatido', 'deprimido']);
dicionarioDeSinonimos.set(bom, ['ótimo', 'excelente', 'maravilhoso']);
console.log("Sinônimos de 'feliz':", dicionarioDeSinonimos.get(feliz));
console.log("Sinônimos de 'triste':", dicionarioDeSinonimos.get(triste));
console.log("Sinônimos de 'bom':", dicionarioDeSinonimos.get(bom));