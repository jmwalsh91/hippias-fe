import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  author: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
  cancelOnClick?: () => void;
};
export function BookCard({
  title,
  author,
  description,
  buttonText,
  onClick,
  cancelOnClick,
}: Props) {
  return (
    <Card tabIndex={0} className="w-[350px] text-center text-zinc-300 bg-transparent opacity-95 hover:opacity-100 shadow-md shadow-yellow-200 focus:shadow-cyan-500 focus:shadow-xl hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 ">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">{description}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {cancelOnClick && (
          <Button variant="outline" onClick={cancelOnClick}>
            Cancel
          </Button>
        )}
        {onClick && buttonText && (
          <Button onClick={onClick}>{buttonText}</Button>
        )}
      </CardFooter>
    </Card>
  );
}
