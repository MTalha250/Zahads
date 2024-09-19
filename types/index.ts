type ServiceType = {
  title: string;
  serviceStyle: "rounded" | "square" | "rectangle";
  secondaryColor: string;
  contactForm?: boolean;
  primaryColor: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  breadcrumbDescription: string;
  heroButton: string;
  serviceOrientation?: "row" | "column";
  link: string;
  requirements: {
    title: string;
    points: string[];
  }[];
  notes: {
    title: string;
    description: string;
  }[];
  services?: {
    title: string;
    description: string;
    icon: string;
  }[];
  info: {
    title: string;
    description: string;
  }[];
  icon: string;
  description: string;
};

type PointType = {
  title: string;
  description: string;
};

export type { PointType, ServiceType };
