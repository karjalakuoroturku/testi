import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function ContentPageBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
