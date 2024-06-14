import ServicesData from "@/data/ServicesData";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PageCover from "@/components/PageCover";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Services() {
  return (
    <main>
      <PageCover title="Services" des="Our main Services we deilvering" />
      <section className="py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ServicesData.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {service.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <WhatsAppButton message={service.message}></WhatsAppButton>                
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
