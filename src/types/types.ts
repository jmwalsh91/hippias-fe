import { Course } from "@/api/methods/Courses";
import { DiscussionAttendance } from "@/api/methods/DiscussionAttendance";
import { Discussion } from "@/api/methods/Discussions";
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

export interface DiscussionDto {
    discussion: Discussion;
    readings: Reading[];
    attendance: DiscussionAttendance[];
  }
  
  interface CourseParticipantDto {
    courseParticipant: CourseParticipant;
    user: User;
  }
  export interface CourseMgmtDto {
    course: Course;
    discussions: Discussion[];
    participants: CourseParticipantDto[];
  }