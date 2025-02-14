import { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // Dropdown filter state

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos?limit=30")
      .then((response) => {
        setTodos(response.data.todos);

        const userIds = [...new Set(response.data.todos.map((t) => t.userId))];
        return axios.get(`https://dummyjson.com/users?limit=${userIds.length}`);
      })
      .then((response) => {
        const userMap = {};
        response.data.users.forEach((user) => {
          userMap[user.id] = `${user.firstName} ${user.lastName}`;
        });
        setUsers(userMap);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Filter tasks based on dropdown selection
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // Show all
  });

  const userTasks = filteredTodos.reduce((acc, todo) => {
    const userName = users[todo.userId] || `User ${todo.userId}`;
    if (!acc[userName]) acc[userName] = [];
    acc[userName].push(todo);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">✅ Team Todo Tracker</h1>

      {/* Dropdown Filter */}
      <div className="mb-6">
        <label className="mr-2 text-lg font-medium">Filter Tasks:</label>
        <select
          className="p-2 border border-gray-400 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {loading ? (
        <p className="text-xl">Loading Todos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {Object.entries(userTasks).map(([userName, tasks]) => (
            <div key={userName} className="p-5 bg-gray-200 rounded-lg shadow-lg border border-gray-300">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{userName}</h2>
              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li key={task.id} className="p-3 rounded-lg flex items-center space-x-2">
                    <span className="border-b border-black flex-grow pb-1">
                      {task.todo}
                    </span>
                    <span className="text-2xl">{task.completed ? "✅" : "⏳"}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Todo;
