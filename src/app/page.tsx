import Color from "@/components/combo/color";
import ComboTest from "@/components/combo/combo-test";
import Highlight from "@/components/highlight/highlight";
import PayAndDelivery from "@/components/pay-and-delivery";
import TestShirts from "@/components/shirts/test-shirts";
import SimpleSlider from "@/components/slider/test-slider";
import Testomonial from "@/components/testomonial/testomonial";
import TopSell from "@/components/top-sell/top-sell";
import Partners from "@/components/ui/partner";

export default function Home() {
  return (
    <>
      <SimpleSlider  slides={["/banner1.jpg","/banner4.jpg", "/banner2.jpg", "/banner3.jpg"]}/>
      {/* <Slider slides={["/banner1.jpg","/banner4.jpg", "/banner2.jpg", "/banner3.jpg"]} autoSlide={true} /> */}
      <ComboTest/>
      {/* <Combo /> */}
      <Highlight />
      <Color />
      <TestShirts title="Solid T shirt" />
      <TopSell />
      <TestShirts title="Design half shirt" />
      <br />
      <TestShirts title="Random half shirt" />
      <TestShirts title="Decent half shirt" />
      <Testomonial/>
      <Partners/>
      <PayAndDelivery/>
    </>
  );
}
