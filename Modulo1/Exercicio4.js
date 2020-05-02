function mostraInfo(usuario) {
    const {nome, idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });
   