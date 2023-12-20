import apiBack from './api';

export class UserService {
    static async postUser(user) {
        
        const response = await apiBack.post('', user, {
          validateStatus: (status) => [201].includes(status),
        });
        console.log(response);
        return response;
      }

}