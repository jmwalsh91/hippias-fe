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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="scroll-m-20 text-4xl font-extrabold mb-16 tracking-tight lg:text-5xl text-white">
        Hippias.
      </h1>
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
              <input type="hidden" name="target" value="login" />
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input id="username" name="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Log In</Button>
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <Form method="POST">
              <input type="hidden" name="target" value="register" />
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Create an account. It's easy--and free!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Create</Button>
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
