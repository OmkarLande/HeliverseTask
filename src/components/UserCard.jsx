const UserCard = ({ user, onAddToTeam }) => (
  <div className="max-w-xs">
    <div className="bg-gray-800  shadow-xl rounded-lg py-3">
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
        <table className="text-xs my-3 flex flex-wrap flex-row justify-center items-center">
          <tbody>
            <tr className="flex flex-wrap flex-row justify-between items-center">
              <td className="px-2 py-2 text-slate-300 font-semibold">Email</td>
              <td className="px-2 py-2 text-slate-300 ">{user.email}</td>
            </tr>
            <tr className="flex flex-wrap flex-row justify-between items-center">
              <td
                className={`px-2 py-2 font-semibold  ${
                  user.gender === "Male"
                    ? "text-blue-500"
                    : user.gender === "Female"
                    ? "text-pink-500"
                    : "text-rose-600"
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
              <button
                className="bg-indigo-500 flex items-center justify-center text-white text-2xl text-center font-bold px-4 py-2 rounded-full "
                onClick={() => onAddToTeam(user)}
              >+</button>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default UserCard
