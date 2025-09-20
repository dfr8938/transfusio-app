import "./ListItem.css";

const ListItem = ({ item, i }) => {
  return (
    <li key={item.id} className="list-item">
      <h3 className="list-item-question">
        <b>{++i + ". "}</b>
        {item.question}
      </h3>
      <p className="list-item-answer">{item.answer}</p>
    </li>
  );
};

export { ListItem };
