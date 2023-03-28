let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

if (nacionalidade === "brasileira") {
    console.log("a pessoa é do Brasil!")
} else if (nacionalidade === "argentina") {
    console.log("a pessoa é da Argentina!")
} else if (nacionalidade === "uruguaia") {
    console.log("a pessoa é do Uruguai!")
} else if (nacionalidade === "chilena") {
    console.log("a pessoa é do Chile!")
} else if (nacionalidade === "colombiana") {
    console.log("a pessoa é da Colômbia!")
} else {
    console.log("nacionalidade não encontrada")
}

switch (nacionalidade) {
    case "brasileira":
        console.log('Brasileira')
        break

    case "argentina":
        console.log('Argentina')
        break

    case "uruguaia":
        console.log('Uruguaia')
        break

    case "chilena":
        console.log('Chilena')
        break

    case "colombiana":
        console.log("Colombiana")
        break

    default:
        console.log("Nacionalidade não encontrada")
}