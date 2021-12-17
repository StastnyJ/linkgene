export interface Token {
  author: {
    authorId: string;
    name: string;
    surname: string;
    image: string;
    institutions: {
      name: string;
      link: string;
      role: string;
    }[];
    email: string;
    publications: {
      name: string;
      link: string;
    }[];
    degrees: {
      institutionName: string;
      degreeLevel: string;
      degreeShortForm: string;
      degreeType: string;
    }[];
  };
  tokenType: string;
  soldWork: {
    workId: number;
    soldWorkType: string;
    soldWorkTitle: string;
    soldWorkSubtitle: string;
    soldWorkPart: string;
    soldWorkDetails: any;
    soldWorkUrl: string;
  };
  tokenDetails: any;
}
