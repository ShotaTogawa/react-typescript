import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  // reduxから全体のstateを取得する
  const {data, error, loading } = useTypedSelector((state) => state.repositories);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  } 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <p>loading...</p>}
      <ul>
      {!error && !loading && data.map(name => (
        <li key={name}>{name}</li>
      ))}
      </ul>
    </div>
  )
}

export default RepositoriesList
