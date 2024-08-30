import React, { useEffect, useState } from "react";
import CardCharacter from "../../components/Character/Card";
import Paginator from "../../components/Paginator/Paginator";
import TitlePage from "../../components/TitlePage/TitlePage";
import { ApiCharacters } from "../../hooks/character";
import Loading from "../../components/Loading/Loading";
import { useDebounce } from 'use-debounce';
import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  const [total, setTotal] = useState<number>(80);
  const [search, setSearch] = useState('');
  const [value] = useDebounce(search, 300);
  const {
    data: characters,
    isLoading,
    error,
  } = ApiCharacters(currentPage, limit, search);

  function searchCharacter(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function selectPageHandle(page: number) {
    setCurrentPage(page);
  }

  return (
    <div className="App justify-content-center h-full overflow-y-auto text-center">
      <TitlePage text="Heroes" />
      <input
        type="text"
        id="search_ipt"
        className="input-search mt-0 mb-5"
        placeholder="Busque pelo seu personagem favorito"
        onChange={searchCharacter}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-content-center gap-6 px-4 w-11  h-full mx-auto">
            {characters?.map((character: any) => (
              <CardCharacter character={character} key={character.id} />
            ))}
          </div>

          <Paginator
            current={currentPage}
            limit={limit}
            total={total}
            onChange={selectPageHandle}
          />
        </>
      )}
    </div>
  );
}

export default App;
