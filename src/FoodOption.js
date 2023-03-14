export default function FoodOption({ image, name }) {
  return (
    <ul className="meal">
      <li>
        <img src={image} alt="" />
        <label>{name}</label>
      </li>
    </ul>
  );
}
