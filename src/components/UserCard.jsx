const UserCard = ({ user }) => (
  <div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
      <div className="photo-wrapper p-2">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={user.avatar}
          alt={user.first_name}
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-indigo-500 font-medium leading-8">
          {user.first_name} {user.last_name}
        </h3>
        <div className="text-center text-white text-xs font-semibold">
          <p>{user.domain}</p>
        </div>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">{user.email}</td>
            </tr>
            <tr className="flex flex-row justify-evenly items-end">
              <td
                className={`px-2 py-2 font-semibold ${
                  user.gender === "Male"
                    ? "text-blue-500"
                    : user.gender === "Female"
                    ? "text-pink-500"
                    : ""
                }`}
              >
                {user.gender}
              </td>
              <td
                className={`px-2 py-2 ${
                  user.available ? "text-green-500" : "text-red-500"
                } font-semibold`}
              >
                {user.available ? "Available" : "Not Available"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default UserCard;
