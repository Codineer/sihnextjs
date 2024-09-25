import Image from "next/image";
import { HomeFront } from "@/components/front-home";
import { TimeLine } from "@/components/time-line";
export default function Home() {
  return (
    <>
      <HomeFront />
      <TimeLine />
    </>
  );
}
