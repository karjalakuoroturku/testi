import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllContentPages, getContentPageBySlug } from "../../../lib/api";
import { SITE_TITLE } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Container from "../../_components/container";
import { ContentPageBody } from "../../_components/content-page-body";

export default async function ContentPage({ params }: Params) {
  const page = getContentPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  const content = await markdownToHtml(page.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <ContentPageBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const page = getContentPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  const title = `${page.title} | ${SITE_TITLE}`;

  return {
    openGraph: {
      title,
      // images: [post.ogImage.url],
    }
  };
}

export async function generateStaticParams() {
  const contentPages = getAllContentPages();

  return contentPages.map((contentPage) => ({
    slug: contentPage.slug,
  }));
}
