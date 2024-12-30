import Container from "@/app/_components/container";
import { HeroContentPage } from "@/app/_components/hero-content-page";
import { Intro } from "@/app/_components/intro";
import { LatestPerformances } from "@/app/_components/latest-performances";
import { getAllContentPages, getAllPerformances } from "../lib/api";

export default function Index() {
  const allPerformances = getAllPerformances();
  const allContentPages = getAllContentPages();

  const heroContentPage = allContentPages[0];

  const latestPerformances = allPerformances.slice(0, 3);

  return (
    <main>
      <Container>
        <Intro />
        <HeroContentPage
          title={heroContentPage.title}
          coverImage={heroContentPage.coverImage}
        />
        {latestPerformances.length > 0 && (
          <LatestPerformances performances={latestPerformances} />
        )}
      </Container>
    </main>
  );
}
