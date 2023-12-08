import UserList from "./components/UserList";

function App() {
  return (
    <div className="bg-[#1e1e1e]">
    <div>
      <h1 className="text-center font-bold text-5xl text-white">User Management App</h1>
      <div className="flex flex-wrap items-center justify-evenly">
        <UserList />
      </div>
    </div>
    </div>
  );
}

export default App;
