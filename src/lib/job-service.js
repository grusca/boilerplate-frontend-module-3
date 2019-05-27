import axios from "axios";

class JobService {
  constructor() {
    this.job = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  addJob(title, description, progress, clientID ) {
    return this.job.post('/api/jobs', { title, description, progress, clientID } )
  }

  getJob(id, jobId){
    return this.job.get(`/api/clients/${id}/jobs/${jobId}`)
  }

}

const job = new JobService();

export default job;


