import { requests } from "../axios";
import { Book } from "./Books";
import { Facilitator } from "./Facilitator";
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
    createdAt: string;
    updatedAt: string;
    photo_url: string;
}

export const Courses = {
  list: async () => await requests.get<Course[]>("/courses"),
  get: async (id: number) => await requests.get<Course>(`/courses/${id}`),
  create: async (course: Course) => await requests.post("/courses", course),
  GetCourseWithDetails: async (id: number) =>
    await requests.get<{
      course: Course;
      books: Book[];
      facilitator: Facilitator;
    }>(`/courses/details/${id}`),
};
