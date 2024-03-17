import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "react-router-dom";

export function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                We're glad to have you back! Sign in to your account.
              </CardDescription>
            </CardHeader>
            <Form method="POST">
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <Form method="POST">
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Create an account. It's easy--and free!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Current password</Label>
                  <Input id="email" name="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">New password</Label>
                  <Input id="password" name="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
