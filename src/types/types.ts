import { Course } from "@/api/methods/Courses";
import { DiscussionAttendance } from "@/api/methods/DiscussionAttendance";
import { Discussion } from "@/api/methods/Discussions";
import { ReadingRating } from "@/api/methods/ReadingRatings";
import { Reading } from "@/api/methods/Readings";


  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface CourseParticipant {
    id: number;
    courseId: number;
    userId: number;
  }

interface DiscussionDto {
    discussion: Discussion;
    readings: Reading[];
    ratings: ReadingRating[];
    attendance: DiscussionAttendance[];
  }
  
  interface CourseParticipantDto {
    courseParticipant: CourseParticipant;
    user: User;
  }
  export interface CourseMgmtDto {
    course: Course;
    discussions: DiscussionDto[];
    participants: CourseParticipantDto[];
  }