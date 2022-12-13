export type Gradient = "association" | "vote" | "classement" | "partenaire";

export const useGradient = (type: Gradient = "classement") => {
  let gradient: string = "";

  switch (type) {
    case "association":
      gradient = "bg-association";
      break;
    case "vote":
      gradient = "bg-vote";
      break;
    case "classement":
      gradient = "bg-classement";
      break;
    case "partenaire":
      gradient = "bg-partenaire";
      break;
  }

  return ref(gradient);
};
