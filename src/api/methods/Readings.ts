import { requests } from "../axios";

/**
 * type Reading struct {
	ID               int    `json:"id"`
	DiscussionID     int    `json:"discussion_id"`
	Type             string `json:"type"`
	Title            string `json:"title"`
	Description      string `json:"description"`
	URL              string `json:"url"`
	BookID           int    `json:"book_id"`
	VideoURL         string `json:"video_url"`
	DiscussionPrompt string `json:"discussion_prompt"`
}
 */

export interface Reading {
  id: number;
  discussion_id: number;
  type: string;
  title: string;
  description: string;
  url: string;
  book_id: number;
  video_url: string;
  discussion_prompt: string;
}

export const Readings = {
  list: async () => await requests.get<Reading[]>("/readings"),
  get: async (id: number) => await requests.get<Reading>(`/readings/${id}`),
  create: async (submission: Reading) =>
    await requests.post("/readings", submission),
  update: async (submission: Reading) =>
    await requests.put(`/readings/${submission.id}`, submission),
  delete: async (id: number) => await requests.delete(`/readings/${id}`),
};