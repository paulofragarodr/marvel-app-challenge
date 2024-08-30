import React, { useEffect, useState } from "react";
import "./details.scss";
import { ApiCharacterDetails } from "../../hooks/character";
import { useParams } from "react-router-dom";
import InfoDetail from "../../components/InfoDetail/InfoDetail";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function Details() {
  const [characterId, setCharacterId] = useState<string>("");
  const id = useParams().id as string;
  const {
    data: character,
    isLoading,
    error,
  } = ApiCharacterDetails(characterId);

  useEffect(() => {
    setCharacterId(id);
  }, []);

  return (
    <div className="px-4 py-4 w-9 h-full mx-auto text-white details-content">
      <div className="flex justify-content-between mb-2">
        <div className="px-3">
        <Link to="/" className="btn-back">Voltar </Link>
          <h1 className="mb-4 mt-4 flex"><span className="ml-2">{character?.name}</span></h1>
          <p>{character?.description}</p>

          <InfoDetail
            data={character?.comics}
            title="Histórias em quadrinhos"
          />
          <InfoDetail data={character?.series} title="Filmes/Séries" />
        </div>
        <div>
            <img
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            />
        </div>
        
      </div>
    </div>
  );
}

export default Details;
