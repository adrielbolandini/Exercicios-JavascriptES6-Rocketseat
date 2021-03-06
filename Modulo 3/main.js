const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umporsegundo= async()=>{
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
};
umporsegundo();



import axios from 'axios';
async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }catch(err){
        console.log('Erro na requisição');
    }
};
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');



class Github {
    static async getRepositories(repo) {
        try{
            const repos = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(repos.data);
        } catch(err){
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');




const buscaUsuario = async user => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(erro){
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');