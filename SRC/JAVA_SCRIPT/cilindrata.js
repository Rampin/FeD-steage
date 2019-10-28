function cilindrata(alesaggio, corsa, cilindri) {
    let cil = 0;
    cil = (((alesaggio / 2) ** 2) * (Math.PI)) * corsa;
    cil = (cil * cilindri) / (10 ** 3);
    cil = Math.floor(cil);
    return cil;
}
console.log(cilindrata(80, 53, 6))