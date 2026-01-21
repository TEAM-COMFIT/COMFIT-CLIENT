import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

interface Experience {
  id: number;
  title: string;
  updateAt: string;
}

export interface ReportState {
  currentStep: Step;
  company: Company | null;
  experience: Experience | null;
  jobDescription: string | "";
  setCurrentStep: (step: Step) => void;
  setCompany: (company: Company) => void;
  setExperience: (experience: Experience) => void;
  setJobDescription: (jd: string) => void;
  reset: () => void;
}

export const useReportStore = create(
  persist<ReportState>(
    (set) => ({
      currentStep: "기업 선택",
      company: null,
      experience: null,
      jobDescription: "",
      setCurrentStep: (step) => set({ currentStep: step }),
      setCompany: (company) => set({ company: company }),
      setExperience: (experience) => set({ experience: experience }),
      setJobDescription: (jd) => set({ jobDescription: jd }),
      reset: () =>
        set({
          currentStep: "기업 선택",
          company: null,
          experience: null,
          jobDescription: "",
        }),
    }),
    {
      name: "report",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
