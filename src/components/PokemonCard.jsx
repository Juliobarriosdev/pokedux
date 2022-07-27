import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import { useDispatch, useSelector } from "react-redux";

const PokemonCard = (props) => {
  const dispatch = useDispatch();

  const handleOnfavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  const { name, image, types, id, favorite } = props;

  const typeString = types.map((elem) => elem.type.name).join(", ");

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnfavorite} />}
    >
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
