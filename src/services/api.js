const APP_URL = import.meta.env.VITE_APP_URL;

const userService = {
  async getAllUsers() {
    try {
      const response = await fetch(`${APP_URL}/api/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    } catch (error) {
      console.error('Error in getAllUsers:', error);
      throw error;
    }
  },

  async getUserById(id) {
    try {
      const response = await fetch(`${APP_URL}/api/users/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user by ID');
      }
      return response.json();
    } catch (error) {
      console.error('Error in getUserById:', error);
      throw error;
    }
  },

  async createUser(userData) {
    try {
      const response = await fetch(`${APP_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return response.json();
    } catch (error) {
      console.error('Error in createUser:', error);
      throw error;
    }
  },

  async updateUser(id, userData) {
    try {
      const response = await fetch(`${APP_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      return response.json();
    } catch (error) {
      console.error('Error in updateUser:', error);
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      const response = await fetch(`${APP_URL}/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return response.json();
    } catch (error) {
      console.error('Error in deleteUser:', error);
      throw error;
    }
  },

  async createTeam(teamData) {
    try {
      const response = await fetch(`${APP_URL}/api/team`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });
      if (!response.ok) {
        throw new Error('Failed to create team');
      }
      return response.json();
    } catch (error) {
      console.error('Error in createTeam:', error);
      throw error;
    }
  },

  async getTeamById(id) {
    try {
      const response = await fetch(`${APP_URL}/api/teams/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch team by ID');
      }
      return response.json();
    } catch (error) {
      console.error('Error in getTeamById:', error);
      throw error;
    }
  },
};

export default userService;
