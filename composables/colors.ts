import { Ref } from "vue";
import { Part } from "~~/types/part";

type TextColor = string;
type BackgroundColor = string;
type BackgroundGradient = `bg-${Part}`;

type Colors = {
  textColor: TextColor;
  backgroundColor: BackgroundColor;
  backgroundGradient?: BackgroundGradient;
};

export const useColorsByPart = (type: Part): Ref<Colors> => {
  const colors: Colors = {
    textColor: "text-primary-base",
    backgroundColor: "bg-primary-base",
    backgroundGradient: `bg-${type}`,
  };

  switch (type) {
    case "classement":
    case "concours":
    case "ceremonie-finale":
      colors.textColor = "text-primary-base";
      colors.backgroundColor = "bg-primary-base";
      break;
    case "partenaires":
      colors.textColor = "text-accent-blue";
      colors.backgroundColor = "bg-accent-blue";
      break;
    case "tour-asso":
      colors.textColor = "text-accent-purple";
      colors.backgroundColor = "bg-accent-purple";
      break;
    case "discovery":
      colors.textColor = "text-primary-variation-1";
      colors.backgroundColor = "bg-primary-variation-1";
      break;
    default:
      colors.textColor = "text-primary-base";
      colors.backgroundColor = "bg-primary-base";
      break;
  }

  return ref(colors);
};
