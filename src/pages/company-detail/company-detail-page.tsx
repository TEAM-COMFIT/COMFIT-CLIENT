import { useParams } from "react-router-dom";

const CompanyDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Company Detail Page - {id}</h1>
    </div>
  );
};

export { CompanyDetailPage };
