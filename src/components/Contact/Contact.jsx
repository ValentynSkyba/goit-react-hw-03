import { IoIosBody, IoIosCall } from "react-icons/io";
const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li>
      <h3>
        {" "}
        <IoIosBody />
        {name}
      </h3>
      <p>
        <IoIosCall />
        {number}
      </p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
