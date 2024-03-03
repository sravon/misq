import Color from "@/components/combo/color";
import Combo from "@/components/combo/combo";
import ComboTest from "@/components/combo/combo-test";
import Highlight from "@/components/highlight/highlight";
import HighlightSlider from "@/components/highlight/highlight-slider";
import PayAndDelivery from "@/components/pay-and-delivery";
import TestShirtsSlider from "@/components/shirts/test-shirts-slider";
import SimpleSlider from "@/components/slider/test-slider";
import Testomonial from "@/components/testomonial/testomonial";
import TopSell from "@/components/top-sell/top-sell";
import Partners from "@/components/ui/partner";

export default function Home() {
  return (
    <>
      <SimpleSlider  slides={["/banner1.jpg","/banner4.jpg", "/banner2.jpg", "/banner3.jpg"]}/>
      {/* <Slider slides={["/banner1.jpg","/banner4.jpg", "/banner2.jpg", "/banner3.jpg"]} autoSlide={true} /> */}
      {/* <ComboTest/> */}
      <Combo />
      <HighlightSlider />
      <Color />
      <TestShirtsSlider title="Solid T shirt" />
      <TopSell />
      <TestShirtsSlider title="Design half shirt" />
      <br />
      <TestShirtsSlider title="Random half shirt" />
      <TestShirtsSlider title="Decent half shirt" />
      <Testomonial/>
      <Partners/>
      <PayAndDelivery/>
    </>
  );
}
