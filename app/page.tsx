"use client";
import SlideshowWithText from "@/src/components/ImageAnimation";
import ImageTextLayout from "@/src/components/Layout";

export default function Home() {
  return (
    <div>
      <SlideshowWithText />

      <div>
        <ImageTextLayout />
      </div>
    </div>
  );
}
