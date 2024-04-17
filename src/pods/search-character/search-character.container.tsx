import { useURLInfo } from 'common/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchCharacter = () => {
  const [termToSearch, setTermToSearch] = React.useState('');
  const navigate = useNavigate();
  const {path, getSearchQueryParam} = useURLInfo();

  React.useEffect(() => {
    const name = getSearchQueryParam(path.search, 'name');
    setTermToSearch(name ?? '');
  }, [path]);

  const submitLookFor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    alert(JSON.stringify(formData));
    navigate(`/characters/?q=${formData['name']}`);
  };
  return (
    <>
      <form onSubmit={submitLookFor}>
        <input
          name="name"
          type="text"
          onChange={(e) => setTermToSearch(e.target.value)}
          value={termToSearch}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
