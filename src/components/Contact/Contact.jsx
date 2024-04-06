const Contact = ({ item }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h3> {name}</h3>
      <p>{number}</p>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
