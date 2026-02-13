import axios from 'axios';

const API_URL = 'http://localhost:5001/api/tasks';

class TaskService {
  // Get all tasks
  async getTasks(filters = {}) {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.priority) params.append('priority', filters.priority);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.order) params.append('order', filters.order);

    const response = await axios.get(`${API_URL}?${params.toString()}`);
    return response.data;
  }

  // Get single task
  async getTask(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  // Create task
  async createTask(taskData) {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  }

  // Update task
  async updateTask(id, taskData) {
    const response = await axios.put(`${API_URL}/${id}`, taskData);
    return response.data;
  }

  // Delete task
  async deleteTask(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }

  // Get statistics
  async getStats() {
    const response = await axios.get(`${API_URL}/stats/summary`);
    return response.data;
  }
}

// Fixed: Assign instance to a variable before exporting
const taskServiceInstance = new TaskService();
export default taskServiceInstance;
