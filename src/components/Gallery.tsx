import { CvDataType } from "@/types/CvDataTypes";
import WhatsAppButton from "./WhatsAppButton";

interface GalleryProps {
  data: CvDataType[];
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <section className="py-16" id="cv-designs">
      <div className="container text-center mb-12">
        <h3 className="text-4xl font-bold uppercase text-primary mb-4">
          Our Cv Design Templates.
        </h3>
        <p>
          Choose a favorite and provide your CV ID to us. We are going to get
          you that next job.
        </p>
      </div>
      <div className="bg-green-400 py-8">
        <div className="container columns-1 sm:columns-2 md:columns-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="group relative flex justify-center items-center rounded-sm"
            >
              <img
                className="py-2 rounded-sm cursor-pointer group-hover:brightness-[10%] duration-300"
                src={item.image}
                alt={item.name}
              />
              <div className="hidden cursor-pointer absolute group-hover:block text-center p-4">
                <h5 className="cursor-pointer z-10 font-extrabold text-3xl text-slate-100">
                  {item.name}
                </h5>
                <p className="cursor-pointer z-10 text-lg mb-6 text-slate-100">
                  Click below button and send your CV ID to us.
                </p>
                <WhatsAppButton message={`${item.description}\n\nTag: CV Inquiry`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
