import "./styles.css";
import FoodOption from "./FoodOption";
import Data from "./Data";
import Search from "./Search";
import Showcase from "./Showcase";
import Personalize from "./Personalize";

export default function App() {
  const foods = Data.map((item) => <FoodOption id={item.id} {...item} />);
  const showcase = Data.map((item) => <Showcase id={item.id} {...item} />);

  return (
    <div className="App">
      <Search />
      <div className="info-container">
        <h1>Favorite</h1>
        <div className="favorite-container">{foods}</div>
        <Personalize />
        {showcase}
      </div>
    </div>
  );
}
