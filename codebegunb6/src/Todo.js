import React, { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todoResponse = await axios.get("https://dummyjson.com/todos?limit=30");
        setTodos(todoResponse.data.todos);

        const userIds = [...new Set(todoResponse.data.todos.map((todo) => todo.userId))];

        const userResponse = await axios.get(`https://dummyjson.com/users?limit=${userIds.length}`);
        const userMap = {};
        userResponse.data.users.forEach((user) => {
          userMap[user.id] = `${user.firstName} ${user.lastName}`;
        });

        setUsers(userMap);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const userTasks = filteredTodos.reduce((acc, todo) => {
    const userName = users[todo.userId] || `User ${todo.userId}`;
    if (!acc[userName]) acc[userName] = [];
    acc[userName].push(todo);
    return acc;
  }, {});

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{color:"brown"}}>Sharuk Team Todo</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Filter Tasks:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {loading ? (
        <p>Loading Todos...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {Object.entries(userTasks).map(([userName, tasks]) => (
            <div
              key={userName}
              style={{
                backgroundColor: "#add8e6", // Light Blue background for the entire card
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            >
              <h2>{userName}</h2>
              <ul style={{ padding: 0, listStyle: "none" }}>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ccc",
                      padding: "10px",
                      marginBottom: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    {task.todo} {task.completed ? "✅" : "⏳"}
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
