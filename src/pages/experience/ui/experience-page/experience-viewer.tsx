import { useParams } from "react-router-dom";

const ExperienceViewer = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Experience Viewer - {id}</h1>
    </div>
  );
};

export { ExperienceViewer };
