// @unocss-include
import { Ref } from "vue";
import { Part } from "~~/types/part";

type TextColor = string;
type BackgroundColor = string;
type BorderColor = string;
type BackgroundGradient = `bg-gradient-${Part}`;
type LineColor = `bg-line-${Part}`;

type Colors = {
  textColor: TextColor | null;
  backgroundColor: BackgroundColor | null;
  lineColor: LineColor | null;
  borderColor: BorderColor | null;
  backgroundGradient: BackgroundGradient | null;
};

export const useColorsByPart = (type: Part): Ref<Colors> => {
  const colors: Colors = {
    textColor: null,
    backgroundColor: null,
    lineColor: null,
    borderColor: null,
    backgroundGradient: null,
  };

  switch (type) {
    case "classement":
    case "concours":
    case "ceremonie-finale":
      colors.textColor = "text-primary-base";
      colors.backgroundColor = "bg-primary-base";
      colors.borderColor = "border-primary-base";
      colors.backgroundGradient = 'bg-gradient-classement';
      break;
    case "partenaires":
      colors.textColor = "text-accent-blue";
      colors.backgroundColor = "bg-accent-blue";
      colors.borderColor = "border-accent-blue";
      colors.backgroundGradient = 'bg-gradient-partenaires';
      break;
    case "tour-asso":
      colors.textColor = "text-accent-purple";
      colors.backgroundColor = "bg-accent-purple";
      colors.borderColor = "border-accent-purple";
      colors.backgroundGradient = 'bg-gradient-tour-asso';
      break;
    case "discovery":
      colors.textColor = "text-primary-light";
      colors.backgroundColor = "bg-primary-light";
      colors.borderColor = "border-primary-light";
      colors.backgroundGradient = 'bg-gradient-discovery';
      break;
    case "blog":
      colors.textColor = null;
      colors.backgroundColor = null;
      colors.lineColor = null;
      colors.borderColor = null;
      colors.backgroundGradient = null;
      break;
    default:
      colors.textColor = "text-primary-base";
      colors.backgroundColor = "bg-primary-base";
      colors.borderColor = "border-primary-base";
      colors.backgroundGradient = 'bg-gradient-classement';
      break;
  }

  return ref(colors);
};
