export const useNormalizedPart = (part: Part): string => {
  switch (part) {
    case "classement":
      return "classement";
    case "tour-asso":
      return "tour asso";
    case "discovery":
      return "discovery";
    case "concours":
      return "concours";
    case "ceremonie-finale":
      return "cérémonie finale";
    case "partenaires":
      return "partenaires";
    default:
      return "classement";
  }
};
