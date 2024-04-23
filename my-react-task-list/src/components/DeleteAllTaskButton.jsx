export const DeleteAllTaskButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="delete-all-button">
      Clear All
    </button>
  );
};

export default DeleteAllTaskButton;
