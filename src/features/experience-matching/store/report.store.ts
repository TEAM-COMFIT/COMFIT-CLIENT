import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import type { Item } from "@/shared/api/generate/http-client";

export type Step =
  | "기업 선택"
  | "기업 정보 확인"
  | "나의 경험 확인"
  | "AI 분석 진행"
  | "결과 확인";

interface Company {
  id: number;
  name: string;
}

export interface ReportState {
  currentStep: Step;
  company: Company | null;
  experience: Item | null;
  jobDescription: string | "";
  reportId: number;
  setCurrentStep: (step: Step) => void;
  setCompany: (company: Company) => void;
  setExperience: (experience: Item) => void;
  setJobDescription: (jd: string) => void;
  setReportId: (id: number) => void;
  reset: () => void;
}

export const useReportStore = create(
  persist<ReportState>(
    (set) => ({
      currentStep: "기업 선택",
      company: null,
      experience: null,
      jobDescription: "",
      reportId: 0,
      setCurrentStep: (step) => set({ currentStep: step }),
      setCompany: (company) => set({ company: company }),
      setExperience: (experience) => set({ experience: experience }),
      setJobDescription: (jd) => set({ jobDescription: jd }),
      setReportId: (id) => set({ reportId: id }),
      reset: () =>
        set({
          currentStep: "기업 선택",
          company: null,
          experience: null,
          jobDescription: "",
          reportId: 0,
        }),
    }),
    {
      name: "report",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
