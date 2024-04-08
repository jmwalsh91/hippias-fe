import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Discussion } from "@/api/methods/Discussions";
import CourseDiscussionAccordionItem from "./CourseDiscussionAccordionItem";

type Props = {
  discussions: Discussion[];
};

export default function CourseDiscussionsAccordion({ discussions }: Props) {
  return (
    <Accordion type="single" collapsible>
      {discussions.map((discussion) => (
        <CourseDiscussionAccordionItem
          discussion={discussion}
          key={discussion.id}
        />
      ))}
    </Accordion>
  );
}
