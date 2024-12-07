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

export default function Contact() {
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
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>Send Email</Button>
                </CardFooter>
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
                    <i className="bi bi-facebook pe-2 text-3xl"></i> doxDesigner
                  </a>
                </h4>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="text-lg hover:text-slate-700 font-medium leading-none">
                  <a
                    href="mailto:doxdeveloperhelpdesk@gmail.com"
                    target="_blank"
                  >
                    <i className="bi bi-envelope pe-2 text-3xl"></i>{" "}
                    doxdeveloperhelpdesk@gmail.com
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
