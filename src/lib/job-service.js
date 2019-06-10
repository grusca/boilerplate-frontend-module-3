import axios from "axios";

class JobService {
  constructor() {
    this.job = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  addJob(title, description, progress, price, clientID ) {
    return this.job.post('/api/jobs', { title, description, progress, price, clientID } )
  }

  getJob(id, jobId){
    return this.job.get(`/api/clients/${id}/jobs/${jobId}`)
  }

  getJobByKeycode(keycode){
    return this.job.get(`/api/jobs/${keycode}`)
  }

  editJob(_id, title, description, progress, price) {
    return this.client.put(`/api/jobs/${_id}`, {title, description, progress, price})
  }

}

const job = new JobService();

export default job;


