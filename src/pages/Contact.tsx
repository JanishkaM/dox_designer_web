import { motion } from "framer-motion";
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

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !subject || !body) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://docxdeveloper.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          body,
          website: "design.docxdeveloper.com",
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || "Error sending email.");
      }

      setSuccess(data?.message || "Email sent successfully!");
      setName("");
      setEmail("");
      setBody("");
    } catch (err: any) {
      console.error("Error sending email:", err);
      setError(err.message || "Error sending email. Please try again later.");
    }
  };
  return (
    <main>
      <section className="py-4">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 overflow-y-hidden">
          <div className="md:p-12 order-2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send Email</CardTitle>
                  <CardDescription>
                    Contact us for any queries or feedback. We are always happy
                    to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          id="subject"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          id="message"
                        />
                      </div>
                    </div>
                    <Button className="mt-3" type="submit">
                      Send Email
                    </Button>
                    {error && (
                      <p className="mt-4 text-sm bg-red-400 rounded-md p-4 text-white">
                        {error}
                      </p>
                    )}
                    {success && (
                      <p className="mt-4 text-sm bg-green-400 rounded-md p-4 text-white">
                        {success}
                      </p>
                    )}
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:p-12 order-1"
          >
            <h3 className="font-extrabold text-3xl">Contact Details</h3>
            <p className="mb-8">
              Contact us for any queries or feedback. We are always happy to
              hear from you.
            </p>
            <div>
              <div className="space-y-1">
                <h4 className="text-lg hover:text-primary font-medium leading-none">
                  <a href="whatsapp://send?phone=+94710985154" target="_blank">
                    <i className="bi bi-whatsapp pe-2 text-3xl"></i> +94 71 098
                    5154
                  </a>
                </h4>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-lg hover:text-blue-700 font-medium leading-none">
                  <a
                    href="https://www.facebook.com/people/DoxDesigner/61556561968928/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook pe-2 text-3xl"></i>{" "}
                    DocxDesigner
                  </a>
                </h4>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-lg hover:text-slate-700 font-medium leading-none">
                  <a href="mailto:mail@docxdeveloper.com" target="_blank">
                    <i className="bi bi-envelope pe-2 text-3xl"></i>{" "}
                    mail@docxdeveloper.com
                  </a>
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
