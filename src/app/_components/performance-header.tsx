import CoverImage from "./performance-cover-image";
import DateFormatter from "./date-formatter";
import { PerformanceTitle } from "@/app/_components/performance-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PerformanceHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PerformanceTitle>{title}</PerformanceTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
