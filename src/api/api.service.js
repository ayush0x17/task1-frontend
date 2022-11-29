import axios from './axiosClient'



export class ApiService {
    async totalAmount() {
        const response = await axios.get('/total-amount')
        return response.data
    }
}