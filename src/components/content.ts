import EXAMPLE from "../assets/example.json";

export interface SidebarsProps {
  depth: number;
  slug: string;
  text: string;
}

export interface ContentType {
  header: string;
  content: string;
}

export class Content {
  data: Array<ContentType>;

  headings: Array<SidebarsProps>;
  staticPaths: Array<string>;

  constructor() {
    this.data = EXAMPLE as Array<ContentType>;

    this.headings = this.data.map((e) => createHeadingObj(e));
    this.staticPaths = this.headings.map((e) => e.slug);
  }
}

function createHeadingObj(content: ContentType): SidebarsProps {
  return {
    depth: 2,
    slug: content.header.toLowerCase().replaceAll(" ", "-"),
    text: content.header,
  };
}

export const content: Content = new Content();
