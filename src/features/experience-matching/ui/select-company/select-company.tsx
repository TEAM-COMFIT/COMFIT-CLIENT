import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { modalStore } from "@/shared/model/store";
import { Button, Modal } from "@/shared/ui";
import {
  useGetExperience,
  useGetCompanyList,
} from "@features/experience-matching/index";

import { useReportStore } from "../../store/report.store";
import { MatchingAutoComplete } from "../matching-auto-complete/matching-auto-complete";

import * as styles from "./select-company.css";

import type { Company } from "../../type";

export const SelectCompany = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate();
  const { data } = useGetExperience(); // 경험 조회 API

  // AI-Report 입력 단계 저장을 위한 전역 상태
  const setCompany = useReportStore((state) => state.setCompany);
  const company = useReportStore((state) => state.company);

  // 기업 입력 데이터 상태 관리
  const [inputValue, setInputValue] = useState(""); // 실시간 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 디바운스된 키워드 상태
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    company
  );
  const { data: searchResults = [] } = useGetCompanyList(searchKeyword); // 기업 검색 API

  // 경험 등록 여부 확인 모달
  useEffect(() => {
    if (data?.totalElements === 0) {
      modalStore.open(
        <>
          <Modal.Content>
            <Modal.Title>아직 등록된 경험이 없습니다</Modal.Title>
            <Modal.SubTitle>지금 바로 경험을 등록하러 가볼까요?</Modal.SubTitle>
          </Modal.Content>
          <Modal.Buttons>
            <Button variant="secondary" onClick={() => navigate(ROUTES.HOME)}>
              나가기
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate(ROUTES.EXPERIENCE_CREATE)}
            >
              이동하기
            </Button>
          </Modal.Buttons>
        </>
      );
    }
  }, [data, navigate]);

  const handleSearch = () => {
    if (!selectedCompany) return;
    // 기업 선택 후, 대기하는 모달
    modalStore.open(
      <>
        <Modal.Content type="auto">
          <Modal.Title>{selectedCompany.name}을 선택하셨습니다</Modal.Title>
          <Modal.SubTitle>기업분석 내용을 불러오는 중입니다.</Modal.SubTitle>
        </Modal.Content>
        <Modal.Image />
      </>,
      3000,
      () => {
        setCompany(selectedCompany);
        onClick();
      }
    );
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>어떤 기업을 분석할까요?</h1>
      <MatchingAutoComplete
        value={inputValue}
        onChange={setInputValue}
        results={searchResults}
        onDebounceChange={setSearchKeyword}
        selectedItem={selectedCompany}
        onSelect={setSelectedCompany}
        onSearch={handleSearch}
      />
    </div>
  );
};
