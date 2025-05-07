import { useSelector } from "react-redux";

const TaskBoard = () => {
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <div>
      <h2>تسک‌ها (وظایف)</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ccc",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>هیچ تسکی موجود نیست.</p>
      )}
    </div>
  );
};

export default TaskBoard;
