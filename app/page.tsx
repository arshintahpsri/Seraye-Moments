import { BookingProvider } from "@/components/BookingProvider";
import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PackageCatalog from "@/components/PackageCatalog";

export default function HomePage() {
  return (
    <BookingProvider>
      <Hero />
      <PackageCatalog />
      <BookingForm />
      <Gallery />
      <Faq />
    </BookingProvider>
  );
}
