const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h3> {name}</h3>
      <p>{number}</p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
