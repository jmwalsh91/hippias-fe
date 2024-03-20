import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, useNavigate } from "react-router-dom";

export default function CreateReadingForDiscussion() {

  return (
    <div className="bg-gray-900 min-h-screen p-4 flex justify-center">
      <Card className="max-w-lg mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Create Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <div className="mb-4">
              <input type="hidden" id="discussionId" name="discussionId" required />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-medium text-gray-300">
                Type
              </label>
              <Input type="text" id="type" name="type" required />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                Title
              </label>
              <Input type="text" id="title" name="title" required />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                Description
              </label>
              <Textarea id="description" name="description" required />
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium text-gray-300">
                URL
              </label>
              <Input type="text" id="url" name="url" />
            </div>
            <div className="mb-4">
              <label htmlFor="bookId" className="block text-sm font-medium text-gray-300">
                Book ID
              </label>
              <Input type="number" id="bookId" name="bookId" />
            </div>
            <div className="mb-4">
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-300">
                Video URL
              </label>
              <Input type="text" id="videoUrl" name="videoUrl" />
            </div>
            <div className="mb-4">
              <label htmlFor="discussionPrompt" className="block text-sm font-medium text-gray-300">
                Discussion Prompt
              </label>
              <Textarea id="discussionPrompt" name="discussionPrompt" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Reading
            </button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}