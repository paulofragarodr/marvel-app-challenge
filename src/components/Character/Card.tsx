import React from "react";
import { Character } from "../../types/character";
import "./Card.scss";
import { Link } from "react-router-dom";

interface CardCharacterProps {
  character: Character;
}
const CharacterCard: React.FC<CardCharacterProps> = ({ character }) => {
  return (
    <Link to={`/details/${character.id}`}>
      <div className="character-card">
        <img
          className="character-card__image-content"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        <div className="new-font text-xl text-left">{character.name}</div>
        <div className="character-card__details">
          <h2 className="mb-2">{character.name}</h2>
          <p className="my-0">{character.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
