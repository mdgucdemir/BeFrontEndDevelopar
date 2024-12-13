"use client";

import MediaBanners from "@/components/mediaBanners/MediaBanners";
import Banner from "@/components/banner/Banner";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div>
      <Banner mediaType="trending/movie/day?" type="banner" />
      <MediaBanners />
    </div>
  );
}
