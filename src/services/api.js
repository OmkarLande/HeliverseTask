
const APP_URL = import.meta.env.VITE_APP_URL

const userService = {
  async getAllUsers() {
    const response = await fetch(`${APP_URL}/api/users`);
    return response.json();
  },

  async getUserById(id) {
    const response = await fetch(`${APP_URL}/api/users/${id}`);
    return response.json();
  },

  async createUser(userData) {
    const response = await fetch(`${APP_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  async updateUser(id, userData) {
    const response = await fetch(`${APP_URL}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  async deleteUser(id) {
    const response = await fetch(`${APP_URL}/api/users${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export default userService;
