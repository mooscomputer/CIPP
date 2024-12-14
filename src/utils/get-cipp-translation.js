import { CippTranslations } from "../components/CippComponents/CippTranslations";

export const getCippTranslation = (field) => {
  if (field === null || field === undefined) {
    return "No data";
  }

  return (
    CippTranslations[field] ||
    field
      .replace(/([A-Z]+)(?=[A-Z][a-z])|([A-Z])/g, " $1$2")
      .replace(/(^|\.)(\w)/g, (_, dot, char) => dot + char.toUpperCase())
      .replace(/[_]/g, " ")
      .replace(/\./g, " - ")
  );
};