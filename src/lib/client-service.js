import axios from "axios";

class ClientService {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  addClient(firstname, lastname, phonenumber, email) {
    return this.client.post('/api/clients', {firstname, lastname, phonenumber, email})
  }

  removeClient(id) {
    return this.client.delete(`/api/clients/${id}`)
  }

  getClient(id) {
    return this.client.get(`/api/clients/${id}`)
  }

  getClients(){
    return this.client.get(`/api/clients`)
  }

  editClient(_id, firstname, lastname, phonenumber, email) {
    return this.client.put(`/api/clients/${_id}`, {firstname, lastname, phonenumber, email})
  }

}

const client = new ClientService();

export default client;


