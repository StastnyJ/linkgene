import { Profile } from "./Users";

export interface Offer {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  requestor: {
    institutionName: string,
    institutionWeb: string,
    institutionImage: string,
    contactPeople: {
      name: string;
      contactType: string;
      contact: string
    }[]
  };
  projectValue: number;
  desiredDeadline: string;
  scientisWorkingCount: number;
  verified: boolean;
}
