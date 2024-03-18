import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Form } from "react-router-dom";

type Props = {};

export default function CreateDiscussion({}: Props) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className=" bg-black border-zinc-300 border-xl min-h-screen">
    <div className="container mx-auto text-white bg-black mt-8">
      <h1 className="text-2xl font-bold mb-4">Create Discussion</h1>
      <Form method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Discussion Name
          </label>
          <Input type="text" name="name" id="name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <Textarea name="description" id="description" rows={4} required />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">
            Date and Time
          </label>
          <Calendar
            id="date"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            required
          />
        </div>
        <Button type="submit">Create Discussion</Button>
      </Form>
</div>
    </div>
  );
}
