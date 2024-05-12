import { Button } from "@/components/ui/button";
import Gallery from "@/components/Gallery";
import CvData from "@/data/CvData";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto grid  md:min-h-[80dvh] grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4">
          <div className="md:my-0 my-10">
            <h4 className="text-2xl md:text-3xl text-primary font-semibold">Welcome,</h4>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
              We Can Solve your 101% Problems with our Designs.
            </h2>
            <p className="md:text-lg mb-6">
              As a{" "}
              <span className="bg-primary px-1 rounded capitalize">
                graphic design company
              </span>
              , we solve your problems with design. The problems we primarily
              solve are <span className="bg-primary px-1 rounded capitalize">creating a CV</span> that will land you a job,{" "}
              <span className="bg-primary px-1 rounded capitalize">
                making amazing presentations
              </span>{" "}
              for your business or academic work, and many more design-based
              issues.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <Button>Watch CV Designs</Button>
              </a>
              <a href="#">
                <Button variant={"outline"}>Learn More About Us</Button>
              </a>
            </div>
          </div>
          <div className="bg-home-bg w-full h-72 md:h-full bg-center bg-contain bg-no-repeat"></div>
        </div>
      </section>
      <Gallery data={CvData}/>
    </main>
  );
}
