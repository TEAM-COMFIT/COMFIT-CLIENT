import { useParams } from "react-router-dom";

const MatchingDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Welcome to the Matching Detail Page - {id}</h1>
    </div>
  );
};

export { MatchingDetailPage };
