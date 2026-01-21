export interface matchingDetailType {
  companyName: string;
  experienceTitle: string;
  jobDescription: string;
  perspectives: {
    perspective: string;
    source: string;
    reason: string;
  }[];
  density: {
    perspective: string;
    connection: string;
    reason: string;
  }[];
  appealPoint: {
    element: string;
    importance: string;
    starPhase: string;
    placement: string;
    direction: string;
  }[];
  suggestion: string;
  guidance: string;
}
