import { Performance } from "@/interfaces/performance";
import { PerformancePreview } from "./performance-preview";

type Props = {
  performances: Performance[];
};

export function LatestPerformances({ performances }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Seuraavat esitykset
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {performances.map((performance) => (
          <PerformancePreview
            key={performance.slug}
            title={performance.title}
            coverImage={performance.coverImage}
            date={performance.date}
            slug={performance.slug}
            excerpt={performance.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
