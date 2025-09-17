import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const welfareItems = [
  {
    title: "Museum – Evolution in Wireless",
    img: "/images/museum-wireless.jpg",
  },
  {
    title: "Canteen – Muktai",
    img: "/images/canteen-muktai.jpg",
  },
  {
    title: "Badminton Hall – Sant Tukaram Sankul",
    img: "/images/badminton-hall.jpg",
  },
  {
    title: "Senior Officers Mess – Dnyaneshwari",
    img: "/images/senior-mess.jpg",
  },
  {
    title: "Junior officer’s Mess – Sanchar",
    img: "/images/junior-mess.jpg",
  },
  {
    title: "Open Museum – Aryabhatta Garden",
    img: "/images/open-museum.jpg",
  },
  {
    title: "Parade ground",
    img: "/images/parade-ground.jpg",
  },
  {
    title: "Solar Electrification project",
    img: "/images/solar-project.jpg",
  },
  {
    title: "Rain Water Harvesting",
    img: "/images/rainwater-harvesting.jpg",
  },
  {
    title: "Maharashtra Police Wireless Welfare Complex and Convention Centre",
    img: "/images/welfare-complex.jpg",
  },
];

export default function WelfareActivities() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Welfare Activities</h2>

      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="welfare">
          <AccordionTrigger className="text-xl font-semibold">Welfare Activities</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {welfareItems.map((item) => (
                <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <div className="mt-3 flex gap-2">
                      <button className="px-3 py-1 rounded-md border hover:bg-black hover:text-white transition">View</button>
                      <button className="px-3 py-1 rounded-md border hover:bg-gray-800 hover:text-white transition">Details</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
