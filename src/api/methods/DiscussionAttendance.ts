/**
 * 
type DiscussionAttendance struct {
    ID           int  `json:"id"`
	DiscussionID int  `json:"discussion_id"`
	UserID       int  `json:"user_id"`
	Attended     bool `json:"attended"`
}
*/

import { requests } from "../axios";

export interface DiscussionAttendance {
  id: number;
  discussion_id: number;
  user_id: number;
  attended: boolean;
}

export const DiscussionAttendance = {
  list: async () =>
    await requests.get<DiscussionAttendance[]>("/discussion-attendance"),
  get: async (id: number) =>
    await requests.get<DiscussionAttendance>(`/discussion-attendance/${id}`),
  create: async (submission: DiscussionAttendance) =>
    await requests.post("/discussion-attendance", submission),
  update: async (submission: DiscussionAttendance) =>
    await requests.put(`/discussion-attendance/${submission.id}`, submission),
  delete: async (id: number) =>
    await requests.delete(`/discussion-attendance/${id}`),
};
