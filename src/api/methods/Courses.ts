import { requests } from "../axios";
/**
 *
 *  
type Course struct {
    ID            int       `json:"id"`
	FacilitatorID int       `json:"facilitatorId"`
	Title         string    `json:"title"`
	Description   string    `json:"description"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
}
*/

export interface Course {
  id: number;
  facilitatorId: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export const Courses = {
  list: async () => await requests.get<Course[]>("/courses"),
  get: async (id: number) => await requests.get<Course>(`/courses/${id}`),
  create: async (course: Course) =>
    await requests.post("/courses", course),
};
