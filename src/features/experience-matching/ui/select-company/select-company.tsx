import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/app/routes/paths";
import { Modal, ModalBasic, useModal } from "@/shared/ui";

import { useGetCompanyList } from "../../api/use-company-list.query";
import { useGetExperience } from "../../api/use-experience.query";
import { useReportStore } from "../../store/report.store";
import { MatchingAutoComplete } from "../matching-auto-complete/matching-auto-complete";

import * as styles from "./select-company.css";

import type { Company } from "../../type";

export const SelectCompany = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate();
  const { data } = useGetExperience(); // 경험 조회 API

  /** Report 전역 상태  */
  const setCompany = useReportStore((state) => state.setCompany);
  const company = useReportStore((state) => state.company);

  /** 모달 상태 관리 */
  const { autoPlay, isOpen, handleModal } = useModal(3000); // 몇 초 뒤 닫히게 할 건지 정의
  const alertModal = useModal(); // 경험 등록 여부 확인 모달

  /** 입력 데이터 상태 관리 */
  const [inputValue, setInputValue] = useState(""); // 실시간 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 디바운스된 키워드 상태
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    company
  );

  // 경험 등록 여부 확인 모달 오픈
  useEffect(() => {
    if (data.totalElements === 0) {
      alertModal.handleModal();
    }
  });

  const { data: searchResults = [] } = useGetCompanyList(searchKeyword); // 기업 검색 API

  // 모달 닫힘 여부 확인 후 페이지 이동
  const prevIsOpen = useRef(isOpen);
  useEffect(() => {
    if (prevIsOpen.current === true && isOpen === false) {
      if (selectedCompany) {
        setCompany(selectedCompany); // 선택된 기업 데이터 저장
        onClick();
      }
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, selectedCompany, onClick, setCompany]);

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
        onSearch={handleModal}
      />
      {/** 경험 등록 여부 확인 모달 */}
      <ModalBasic
        isOpen={alertModal.isOpen}
        onClose={() => navigate(ROUTES.HOME)}
        onConfirm={() => navigate(ROUTES.EXPERIENCE_CREATE)}
        title="아직 등록된 경험이 없습니다"
        subTitle="지금 바로 경험을 등록하러 가볼까요?"
      />
      {/** 기업 선택 후, 대기 모달 */}
      <Modal autoPlay={autoPlay} isOpen={isOpen} onClose={handleModal}>
        <Modal.Content type="auto">
          <Modal.Title>{selectedCompany?.name}을 선택하셨습니다</Modal.Title>
          <Modal.SubTitle>기업분석 내용을 불러오는 중입니다.</Modal.SubTitle>
        </Modal.Content>
        <Modal.Image />
      </Modal>
    </div>
  );
};
