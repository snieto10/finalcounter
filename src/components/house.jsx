import { useParams } from "react-router-dom";

export function House() {
  const { id } = useParams();
  return <h1>List: {id} </h1>;
}
