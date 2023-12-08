import { useEffect, useState, lazy, Suspense } from "react";
import userService from "../services/api";
const UserCard = lazy(() => import("./UserCard"));

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    domain: null,
    gender: null,
    availability: null,
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userList = await userService.getAllUsers();
        const usersWithSelection = userList.map((user) => ({
          ...user,
          selected: false,
        }));
        setUsers(usersWithSelection);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();

  }, []);

  const filteredUsers = users
    .filter(
      (user) =>
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((user) => {
      // Filter by Domain
      if (selectedFilters.domain && user.domain !== selectedFilters.domain) {
        return false;
      }
      // Filter by Gender
      if (selectedFilters.gender && user.gender !== selectedFilters.gender) {
        return false;
      }
      // Filter by Availability
      if (
        selectedFilters.availability !== null &&
        user.available !== selectedFilters.availability
      ) {
        return false;
      }
      return true;
    });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  const handleAddToTeam = (user) => {
    // Check if the user's domain and availability are unique in the selectedUsers array
    const isUnique = !selectedUsers.some(
      (selectedUser) =>
        selectedUser.domain === user.domain &&
        selectedUser.available === user.available
    );

    if (isUnique) {
      setSelectedUsers((prevUsers) => [...prevUsers, user]);
    } else {
      // Display an error or notification that the user cannot be added
      console.error("User already selected for the team");
      alert('User already selected for the team')
    }
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Search */}
      <div className="p-8 flex flex-wrap items-center justify-center h-full w-full ">
        <label htmlFor="search" className="text-gray-300 font-semibold px-2 py-2">
          Search by Name:
        </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          className="bg-gray-800 text-white"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Filters */}
      <div className="flex flex-wrap flex-row items-center justify-center h-full w-full">
        <div className="py-2 px-2">
          <label
            htmlFor="domainFilter"
            className="text-gray-300 font-semibold px-2 py-2"
          >
            Domain:
          </label>
          <select
            id="domainFilter"
            className="bg-gray-800 text-white"
            onChange={(e) => handleFilterChange("domain", e.target.value)}
          >
            <option value="">All</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Management">Management</option>
            <option value="Business Development">Business Development</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="py-2 px-2">
          <label
            htmlFor="genderFilter"
            className="text-gray-300 font-semibold px-2 py-2"
          >
            Gender:
          </label>
          <select
            id="genderFilter"
            className="bg-gray-800 text-white"
            onChange={(e) => handleFilterChange("gender", e.target.value)}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Agender">Agender</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>
        </div>

        <div className="py-2 px-2">
          <label
            htmlFor="availabilityFilter"
            className="text-gray-300 font-semibold px-2 py-2"
          >
            Availability:
          </label>
          <select
            id="availabilityFilter"
            className="bg-gray-800 text-white"
            onChange={(e) =>
              handleFilterChange("availability", e.target.value === "true")
            }
          >
            <option value="">All</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
      </div>
      
      
      {/* Display the selected users for the team */}
<div className="p-8  flex flex-col flex-wrap items-center gap-2 h-full w-full justify-center">
  <h2 className="text-gray-300 font-semibold text-xl">Selected Team Members:</h2>
  {selectedUsers.length > 0 ? (
    <ul >
    <div className="flex flex-wrap items-center gap-2  h-full w-full justify-center">
      {selectedUsers.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </div>
    </ul>
  ) : (
    <p className="text-gray-300">No team members selected.</p>
  )}
</div>

      {/* card */}
      <ul>
          <h2 className="text-gray-300 font-semibold text-xl text-center py-2">All Users:</h2>
        <div className="flex flex-wrap items-center gap-2  h-full w-full justify-center">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} onAddToTeam={handleAddToTeam} />
            </li>
          ))}
        </div>
      </ul>
    </Suspense>
  );
}

export default UserList;
