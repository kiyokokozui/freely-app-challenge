export interface ITripResponse {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  destinations: string[];
  status: STATUS;
}

export enum STATUS {
  NOT_STARTED = "NOT_STARTED",
  FINISHED = "FINISHED",
  STARTED = "STARTED",
}
