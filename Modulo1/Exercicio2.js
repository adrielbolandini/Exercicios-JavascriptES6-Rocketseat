const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];



const newArrAge = usuarios.map(item => item.idade);
console.log(newArrAge);

const newArrFilter = usuarios.filter(item => item.empresa ==="Rocketseat" && item.idade>18);
console.log(newArrFilter);

const newArrFind = usuarios.find(item => item.empresa==='Google');
console.log(newArrFind);

usuarios.map(function(item,index){
    return usuarios[index].idade=item.idade*2;
});
const newArr = usuarios.filter(item => item.idade<50);
console.log(newArr);