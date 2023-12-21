import apiBack from './api';

export class UserService {
    static async postUser(user) {
        const response = await apiBack.post('', user, {
          validateStatus: (status) => [201].includes(status),
        });
        console.log(response);
        return response;
      }
    static async getUser(user) {
      const response = await apiBack.get('',{
        validateStatus: (status) => [200].includes(status),
      });
      console.log(response);
      return response;
    }
    static async putUser(updatedUserData) {
      const response = await apiBack.put(`/${updatedUserData.id}`, updatedUserData, {
        validateStatus: (status) => [200].includes(status),
      });
      console.log(response);
      return response;
    }
    static async deleteUser(userId) {
      const response = await apiBack.delete(`/${userId}`, {
        validateStatus: (status) => [204].includes(status),
      });
      console.log(response);
      return response;
    }
  
}