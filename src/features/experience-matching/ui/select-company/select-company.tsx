import { useEffect, useRef, useState } from "react";

import { useReportStore } from "@/app/store";
import { Modal, useModal } from "@/shared/ui";

import { MatchingAutoComplete } from "../matching-auto-complete/matching-auto-complete";
import { MOCK_AUTOCOMPLETE } from "../matching-auto-complete/mock";

import * as styles from "./select-company.css";

import type { Company } from "../../type";

export const SelectCompany = ({ onClick }: { onClick: () => void }) => {
  const setCompanyId = useReportStore((state) => state.setCompanyId);
  const companyId = useReportStore((state) => state.companyId);
  const { autoPlay, isOpen, handleModal } = useModal(10000); // 몇 초 뒤 닫히게 할 건지 정의

  const [inputValue, setInputValue] = useState(""); // 실시간 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 디바운스된 키워드 상태

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    companyId
  );

  // TODO: 추후 API 연동
  const searchResults = MOCK_AUTOCOMPLETE.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // 모달 닫힘 여부 확인 후 페이지 이동
  const prevIsOpen = useRef(isOpen);
  useEffect(() => {
    if (prevIsOpen.current === true && isOpen === false) {
      if (selectedCompany) {
        setCompanyId(selectedCompany); // 선택된 기업 데이터 저장
        onClick();
      }
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, selectedCompany, onClick, setCompanyId]);

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
