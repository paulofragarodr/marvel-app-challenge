import { useQuery } from "@tanstack/react-query";
import axios from "../services/axiosConfig";
import { ResponseCharacters } from "../types/response-characters";
import { Character } from "../types/character";

const fetcCharacters = async (
  offset: number,
  limit: number,
  nameStartsWith: string
): Promise<Character[]> => {
  let params: { [key in string]: any } = {
    offset: offset,
    limit: limit,
  };

  if (nameStartsWith.length > 0) params["nameStartsWith"] = nameStartsWith;
  const {
    data: {
      data: { results },
    },
  } = await axios.get<ResponseCharacters>("/v1/public/characters", {
    params
  });
  return results;
};

export const ApiCharacters = (page: number, limit: number, term: string) => {
  const offset = (page - 1) * limit;
  return useQuery<Character[], Error>({
    queryKey: ["characters", offset, limit, term],
    queryFn: () => fetcCharacters(offset, limit, term),
  });
};

const getCharacter = async (characterId: string): Promise<Character | null> => {
  const {
    data: {
      data: { results },
    },
  } = await axios.get<ResponseCharacters>(
    `/v1/public/characters/${characterId}`
  );
  return results.length === 1 ? results[0] : null;
};

export const ApiCharacterDetails = (characterId: string) => {
  return useQuery<Character | null, Error>({
    queryKey: ["character", characterId],
    queryFn: () => getCharacter(characterId),
  });
};
