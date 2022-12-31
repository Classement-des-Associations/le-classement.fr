import { Ref } from "vue";
import { Gradient } from "~~/types/gradient";

type BackgroundGradient = `bg-${Gradient}`;

export const useGradient = (
  type: Gradient = "classement"
): Ref<BackgroundGradient> => {
  let gradient: BackgroundGradient | null = null;

  switch (type) {
    case "classement" || "concours" || "ceremonie-finale":
      gradient = "bg-classement";
      break;
    case "partenaires":
      gradient = "bg-partenaires";
      break;
    case "tour-asso":
      gradient = "bg-tour-asso";
      break;
    case "discovery":
      gradient = "bg-discovery";
      break;
    default:
      gradient = "bg-classement";
      break;
  }

  return ref(gradient);
};
