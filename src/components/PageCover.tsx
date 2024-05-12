interface PageCoverProps {
  title: string;
  des: string;
}

export default function PageCover({ title, des }: PageCoverProps) {
  return (
    <section className="bg-page-bg bg-cover bg-no-repeat w-full ">
      <div className="container grid place-items-center h-[200px]">
        <div className="text-center">
          <h2 className="uppercase text-5xl font-black mb-2">{title}</h2>
          <p className="text-md font-semibold">{des}</p>
        </div>
      </div>
    </section>
  );
}
