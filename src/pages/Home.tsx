import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Gallery from "@/components/Gallery";
import CvData from "@/data/CvData";
import Cta from "@/components/Cta";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="pb-16 overflow-x-hidden">
        <div className="container mx-auto grid md:min-h-[80dvh] grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4 md:px-12">
          <motion.div
            className="md:my-0 my-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-2xl md:text-3xl text-primary font-semibold">
              Welcome,
            </h4>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              We Can Solve your 101% Problems with our Designs.
            </h2>
            <p className="mb-6">
              As a{" "}
              <span className="font-medium bg-primary px-1 rounded capitalize">
                graphic design company
              </span>
              , we solve your problems with design. The problems we primarily
              solve are{" "}
              <span className="font-medium bg-primary px-1 rounded capitalize">
                creating a CV
              </span>{" "}
              that will land you a job,{" "}
              <span className="font-medium bg-primary px-1 rounded capitalize">
                making amazing presentations
              </span>{" "}
              for your business or academic work, and fix many more design-based
              issues.
            </p>
            <div className="flex gap-4">
              <a href="#cv-designs">
                <Button>Watch CV Designs</Button>
              </a>
              <Link to={"/about"}>
                <Button variant={"outline"}>Learn More About Us</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-home-bg w-full h-72 md:h-full bg-center bg-contain bg-no-repeat"
          ></motion.div>
        </div>
      </section>
      <Gallery data={CvData} />
      <Cta />
    </main>
  );
}
