import { StaticImageData } from "next/image";

export type ContentItemType = 'paragraph' | 'quote' | 'subsection' | 'bulletList';

export interface ContentQuote {
  type: 'quote';
  text: string;
}

export interface ContentParagraph {
  type: 'paragraph';
  text: string;
}

export interface BulletPoint {
  text: string;
}

export interface BulletList {
  type: 'bulletList';
  items: BulletPoint[];
}

export interface ContentSubsection {
  type: 'subsection';
  subtitle: string;
  subtitleNumber?: string;
  content: (ContentParagraph | ContentQuote | BulletList)[];
}

export type ContentItem = ContentParagraph | ContentQuote | BulletList | ContentSubsection;

export interface ContentSectionProps {
  title: string;
  titleNumber?: number;
  content: ContentItem[];
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
  quoteClassName?: string;
  bulletListClassName?: string;
  bulletPointClassName?: string;
}

export type BlogSection = ContentSectionProps

export interface BreadcrumbItem {
  text: string;
  url?: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
}

export interface CaptionedImageProps {
  src: string | StaticImageData;
  alt?: string;
  caption: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
}

export interface FeedbackOption {
  emoji: string;
  label: string;
  count: number;
}