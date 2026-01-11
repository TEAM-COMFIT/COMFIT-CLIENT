import { useParams } from "react-router-dom";

import Dropdown from "@/shared/ui/dropdown/dropdown";
const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Company Detail Page - {id}</h1>
      <Dropdown type="medium">
        <Dropdown.Trigger>정렬 기준</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>최신순</Dropdown.Item>
          <Dropdown.Item>인기순</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export { CompanyDetailPage };
