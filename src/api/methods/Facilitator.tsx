import { requests } from "../axios";

/**
 * type Facilitator struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Bio       string    `json:"bio"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	PhotoUrl  string    `json:"photo_url"`
}
 */

export interface Facilitator {
  id: number;
  name: string;
  email: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  photo_url: string;
}
export const Facilitator = {
  list: async () => await requests.get<Facilitator[]>("/facilitators"),
  get: async (id: number) =>
    await requests.get<Facilitator>(`/facilitators/${id}`),
  create: async (facilitator: Facilitator) =>
    await requests.post("/facilitators", facilitator),
  update: async (facilitator: Facilitator) =>
    await requests.put("/facilitators", facilitator),
  delete: async (id: number) => await requests.delete(`/facilitators/${id}`),
};