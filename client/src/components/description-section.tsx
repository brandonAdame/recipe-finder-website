export interface SectionContent {
  headerText: string;
  bodyText: string;
}

export interface DescriptionProps {
  sectionName: string;
  sectionContent: SectionContent[];
}

export default function DescriptionSection(props: DescriptionProps) {
  return (
    <div className="flex justify-between w-full pt-24 pb-24">
      <div>
        <h1 className="text-preset-2 max-w-94">{props.sectionName}</h1>
      </div>
      <div className="max-w-189 flex flex-col gap-12">
        {props.sectionContent.map((content, index) => (
          <div key={`${content.headerText}-${index}`} className="flex gap-5">
            <img
              src="/assets/images/icon-bullet-point.svg"
              alt="Bullet point icon"
              className="w-8 h-8"
            />
            <div className="flex flex-col gap-3">
              <h4 className="text-preset-4">{content.headerText}</h4>
              <p className="text-preset-6">{content.bodyText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
