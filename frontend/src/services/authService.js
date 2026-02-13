import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

class AuthService {
    async register(userData) {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    }

    async login(userData) {
        const response = await axios.post(`${API_URL}/login`, userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('token');
    }
}

export default new AuthService();
