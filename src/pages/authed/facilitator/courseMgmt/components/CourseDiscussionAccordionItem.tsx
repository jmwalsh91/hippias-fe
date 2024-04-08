import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Discussion } from "@/api/methods/Discussions";

type Props = {
  discussion: Discussion;
};

export default function CourseDiscussionAccordionItem({ discussion }: Props) {
  const dDate = new Date(discussion.date_time);
  return (
    <AccordionItem value={"item-" + discussion.id}>
      <AccordionTrigger>
        <h3 className="text-lg">{discussion.name}</h3>
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-lg">{discussion.description}</p>
        <p className="text-start">
          <span className="text-lg">Date: {dDate.toDateString()}</span>
          <br />
          <span className="text-lg">Time: {dDate.toLocaleTimeString()}</span>
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
