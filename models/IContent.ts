import { IContentData } from "./IContentData";

export interface IContent {
  subHeading: string;
  heading: string;
  excerpt: string;
  contentData: IContentData[];
}
