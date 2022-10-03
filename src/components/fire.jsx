import { useParams } from "react-router-dom";

export default function Fire() {
  const { id } = useParams();

  return <h1>List: {id} </h1>;
}
