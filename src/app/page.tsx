import Color from "@/components/combo/color";
import Combo from "@/components/combo/combo";
import Highlight from "@/components/highlight/highlight";
import Shirts from "@/components/shirts/Shirts";
import Slider from "@/components/slider/slider";
import TopSell from "@/components/top-sell/top-sell";
import Image from "next/image";


export default function Home() {

  const slides = [
    <Image
      alt="Mountains"
      src={"/bg.png"}
      width={1200}
      height={200}
      style={{
        width: "100%",
        height: "400px"
      }}
    />,
  ]


  return (
    <>
      <Slider slides={["/image3.png","/bg.png", "/image2.png", "/image1.png"]} autoSlide={true} />
      <Combo />
      <Highlight />
      <Color />
      <Shirts />
      {/* <Shirts />
      <TopSell />
      <Shirts />
      <Highlight /> */}
    </>
  );
}
