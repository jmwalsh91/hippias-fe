import { requests } from "../axios";

/**
 * type Discussion struct {
ID          int       `json:"id"`
CourseID    int       `json:"course_id"`
Name        string    `json:"name"`
Description string    `json:"description"`
DateTime    time.Time `json:"date_time"`
}

*/
export interface Discussion {
  id: number;
  course_id: number;
  name: string;
  description: string;
  date_time: string;
}

export const Discussions = {
  list: async () => await requests.get<Discussion[]>("/discussions"),
  get: async (id: number) =>
    await requests.get<Discussion>(`/discussions/${id}`),
  create: async (submission: Discussion) =>
    await requests.post("/discussions", submission),
  update: async (submission: Discussion) =>
    await requests.put(`/discussions/${submission.id}`, submission),
  delete: async (id: number) => await requests.delete(`/discussions/${id}`),
};
