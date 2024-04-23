export default function Task({ task }) {
  const { description, complete } = task;

  const getStyle = () => {
    return {
      textDecoration: task.complete ? "line-through" : "none",
      color: task.complete ? "red" : "inherit",
    };
  };

  return (
    <div style={getStyle()}>
      <table className="list">
        <tr>
          <th>
            <input type="radio" checked={task.complete} />
            {task.description}
          </th>
        </tr>
      </table>
    </div>
  );
}
