import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  BellIcon,
  ClockIcon,
  EnvelopeClosedIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

type NotificationCardProps = {
  time: string;
  type: "info" | "warning" | "alert" | "message";
  title: string;
  content: string;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  time,
  type,
  title,
  content,
}) => {
  const getIconAndColor = () => {
    switch (type) {
      case "info":
        return {
          icon: <InfoCircledIcon className="h-5 w-5" />,
          color: "text-blue-500",
        };
      case "warning":
        return {
          icon: <ExclamationTriangleIcon className="h-5 w-5" />,
          color: "text-yellow-500",
        };
      case "alert":
        return {
          icon: <BellIcon className="h-5 w-5" />,
          color: "text-green-500",
        };
        case "message":
        return {
          icon: <EnvelopeClosedIcon className="h-5 w-5" />,
          color: "text-green-500",
        };
      default:
        return {
          icon: <InfoCircledIcon className="h-5 w-5" />,
          color: "text-blue-500",
        };
    }
  };

  const { icon, color } = getIconAndColor();

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center">
          <div className={`mr-2 ${color}`}>{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="mt-1 text-sm text-gray-500 flex items-center">
         <ClockIcon className="h-4 w-4 mr-1" />
          {time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
