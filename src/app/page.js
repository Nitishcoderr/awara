import Categories from "@/components/Categories";
import ContactForm from "@/components/ContactForm";
import { CustomerReviews } from "@/components/CustomerReviews";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TopDestinations from "@/components/TopDestinations";

export default function Home() {
  return (
   <>
   <Hero/>
   <Categories/>
   <Experience/>
   <TopDestinations/>
   <CustomerReviews/>
   <ContactForm/>
   </>
  );
}
