import { requests } from "../axios";

/**
 * type ReadingRating struct {
	ID        int `json:"id"`
	ReadingID int `json:"reading_id"`
	UserID    int `json:"user_id"`
	Rating    int `json:"rating"`
}
 */

export interface ReadingRating {
  id: number;
  reading_id: number;
  user_id: number;
  rating: number;
}

export const ReadingRatings = {
  list: async () => await requests.get<ReadingRating[]>("/reading-ratings"),
  get: async (id: number) =>
    await requests.get<ReadingRating>(`/reading-ratings/${id}`),
  create: async (submission: ReadingRating) =>
    await requests.post("/reading-ratings", submission),
  update: async (submission: ReadingRating) =>
    await requests.put(`/reading-ratings/${submission.id}`, submission),
  delete: async (id: number) => await requests.delete(`/reading-ratings/${id}`),
};
