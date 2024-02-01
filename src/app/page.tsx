import Color from "@/components/combo/color";
import Combo from "@/components/combo/combo";
import Highlight from "@/components/highlight/highlight";
import Shirts from "@/components/shirts/Shirts";
import Slider from "@/components/slider/slider";
import TopSell from "@/components/top-sell/top-sell";
import Partners from "@/components/ui/partner";

export default function Home() {
  return (
    <>
      <Slider slides={["/banner1.jpg","/banner4.jpg", "/banner2.jpg", "/banner3.jpg"]} autoSlide={true} />
      <Combo />
      <Highlight />
      <Color />
      <Shirts title="Solid T shirt" />
      <Shirts title="Design half shirt" />
      <TopSell />
      <Shirts title="Design half shirt" />
      <Highlight />
      <Partners/>
    </>
  );
}
