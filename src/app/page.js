import Image from "next/image";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Hero from "./components/Hero";

export default function Home() {
  
  return (
    <div className="">
 <Hero/>
  <AboutUs/>
  <Service/>
    </div>
  );
}
