export interface HeroContent {
  pillText: string;
  heading: {
    firstLine: string;
    emphasizedWord: string;
    secondLine: string;
  };
  description: string;
  buttonText: string;
  badge: {
    imageSrc: string;
    alt: string;
  };
  trustedHeading: string;
  trustedSubtext: string;
}
