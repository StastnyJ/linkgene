import { Token } from "../Types/Tokens";

export const EmptyToken: Token = {
  author: {
    authorId: "",
    degrees: [],
    email: "",
    image: "",
    institutions: [],
    name: "",
    publications: [],
    surname: "",
  },
  soldWork: {
    soldWorkDetails: {},
    soldWorkPart: "",
    soldWorkSubtitle: "",
    soldWorkTitle: "",
    soldWorkType: "",
    soldWorkUrl: "",
    workId: 0,
  },
  tokenType: "",
  tokenDetails: {},
};

export const generateToken = (token: Token) => {
  const tokenJson = JSON.stringify(token);
  const element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(tokenJson));
  element.setAttribute("download", "SampleToken.json");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
