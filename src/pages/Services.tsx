import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import PageCover from "@/components/PageCover"

export default function Services() {
  return (
    <main>
      <PageCover title="Services" des="Our main Services we deilvering"/>
      <section className="py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume (CV) Design</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Presentation Design</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm">Contact Us for more Details</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
