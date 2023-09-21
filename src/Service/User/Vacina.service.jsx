import { LocalStorageService } from "./LocalStorage.server";

const API_URL = 'http://localhost:3000/vacinas'



const Get = async () => {
   /*  return localStorage.getItem('users')  ? JSON.parse(localStorage.getItem('users')) : null */
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
   }

const Create = async(data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res && `Paciente ${data.nome} criado com sucesso`);
}

const CreateVacina = async(vacinaData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(vacinaData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(async (data) => {
         const res = await data.json();
          console.log(res);
          console.log("Vacina cadastrado com sucesso");
        })
        .catch((err) => {
          console.log(err);
        });
  
}

const Show = async (id) => {

const response = await fetch(`${API_URL}/${id}`);
const data = await response.json();
 
return data;
}

const ShowByEmail = async (email) => {
    const filter = `?email_like=${email}`;
    const response = await fetch(`${API_URL}/${filter}`);
    const data = await response.json();
    
    return data[0];
}

const ShowByNome = async (nome) => {
    const filter = `?nome_like=${nome}`;
    const response = await fetch(`${API_URL}/${filter}`);
    const data = await response.json();
    
    return data;
}

const Delete = (id) => {
    LocalStorageService.set('vacinas', Get().filter( vacinas => vacinas.id !== id));
}

const DeleteVacina = (id) => {
    LocalStorageService.set('consutas', Get().filter( vacinas => vacinas.id !== id));
}


const Update = (id, newUser) => {
    const users = Get();
    users[users.find(user => user.ide === id).indexOf] = newUser;
    LocalStorageService.set('users', users)
}


export const VacinaService = {
    Get,
    Create,
    CreateVacina,
    Show,
    ShowByEmail,
    ShowByNome,
    Delete,
    DeleteVacina,
    Update
}