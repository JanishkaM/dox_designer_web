import WhatsAppButton from "./WhatsAppButton";
import { Button } from "./ui/button";

export default function Cta() {
  return (
    <section className="py-12 bg-slate-200">
      <div className="container flex justify-center flex-col items-start md:items-center">
        <h3 className="font-extrabold uppercase text-3xl mb-4">
          For further information, please contact us.
        </h3>
        <p className="mb-5 md:w-3/4">
          <span className="font-semibold bg-primary px-1 rounded capitalize">
            Being attractive
          </span>{" "}
          is the best way to make an impression on someone.{" "}
          <span className="font-semibold bg-primary px-1 rounded capitalize">
            We use that principle
          </span>{" "}
          to address problems in our daily lives because of this.{" "}
          <span className="font-semibold bg-primary px-1 rounded capitalize">
            We are creating visually appealing resumes(CV), not resumes.
          </span>{" "}
          We create more than just resumes. We also create visually appealing
          documents, presentations, etc. Now is the time to present everything
          nicely.{" "}
          <span className="font-semibold bg-primary px-1 rounded capitalize">
          Click the buttons below to reach out to us
          </span>{" "}
          and make that happen. With regards.
        </p>
        <div className="flex gap-4">
          <WhatsAppButton message="I need to Know About," />
          <a
            href="https://www.facebook.com/people/DoxDesigner/61556561968928/"
            target="_blank"
          >
            <Button className="bg-blue-700 hover:bg-blue-600">Facebook Page</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
