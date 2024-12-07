import Cta from "@/components/Cta";
import PageCover from "@/components/PageCover";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <PageCover
        title="About Us"
        des="Who we are and Why You need to select us."
      />
      <section className="pb-16">
        <div className="container text-center">
          <motion.h2 className="w-full m-auto md:w-1/2 font-extrabold text-4xl uppercase text-gray-900 mt-8">
            We use our designs to assist people in finding solutions to their
            problems.
          </motion.h2>
          <motion.p className="w-full m-auto md:w-1/2 font-medium text-gray-700 text-lg mt-2">
            Our group of designers is enthusiastic about using creative designs
            to solve issues. We are specialists in Microsoft Word, Microsoft
            PowerPoint, Photoshop, and other everyday and design software.
          </motion.p>
          <Link to={"/services"}>
            <Button className="mt-5">Our Servises</Button>
          </Link>
        </div>
      </section>
      <Cta />
    </main>
  );
}
