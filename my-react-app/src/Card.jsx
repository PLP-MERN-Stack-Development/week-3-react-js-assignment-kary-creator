const Card = ({ title, content }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="font-bold">{title}</h3>
    <p>{content}</p>
  </div>
);

export default Card;