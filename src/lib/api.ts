import { ContentPage } from "@/interfaces/contentPage";
import { Performance } from "@/interfaces/performance";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// performances
const performancesDirectory = join(process.cwd(), "_performances");

export function getPerformanceSlugs() {
  return fs.readdirSync(performancesDirectory);
}

export function getPerformanceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(performancesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Performance;
}

export function getAllPerformances(): Performance[] {
  const slugs = getPerformanceSlugs();
  const performances = slugs
    .map((slug) => getPerformanceBySlug(slug))
    // sort performances by date in descending order
    .sort((performance1, performance2) =>
      performance1.date > performance2.date ? -1 : 1
    );
  return performances;
}

// content pages
const contentPagesDirectory = join(process.cwd(), "_contentPages");

export function getContentPageSlugs() {
  return fs.readdirSync(contentPagesDirectory);
}

export function getAllContentPages(): ContentPage[] {
  const slugs = getContentPageSlugs();
  const contentPages = slugs.map((slug) => getContentPageBySlug(slug));
  return contentPages;
}

export function getContentPageBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentPagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as ContentPage;
}
