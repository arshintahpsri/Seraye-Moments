import { BookingProvider } from "@/components/BookingProvider";
import Campuses from "@/components/Campuses";
import Catalog from "@/components/Catalog";
import OrderFlow from "@/components/OrderFlow";
import PhotographerPicker from "@/components/PhotographerPicker";
import StyleShowcase from "@/components/StyleShowcase";
import Terms from "@/components/Terms";
import TrackingBooking from "@/components/TrackingBooking";

export default function HomePage() {
  return (
    <BookingProvider>
      <Catalog />
      <StyleShowcase />
      <PhotographerPicker />
      <OrderFlow />
      <Terms />
      <Campuses />
      <TrackingBooking />
    </BookingProvider>
  );
}
