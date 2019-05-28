import axios from "axios";

class ClientService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  addClient(firstname, lastname) {
    return this.client.post('/api/clients', {firstname, lastname})
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

  editClient(_id, firstname, lastname) {
    return this.client.put(`/api/clients/${_id}`, {firstname, lastname})
  }

}

const client = new ClientService();

export default client;


