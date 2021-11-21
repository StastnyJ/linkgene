import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as MedicineIcon } from "../Icons/Categories/medicine.svg";
import { ReactComponent as BiologyIcon } from "../Icons/Categories/biology.svg";
import { ReactComponent as ChemistryIcon } from "../Icons/Categories/chemistry.svg";
import { ReactComponent as TechnologyIcon } from "../Icons/Categories/technology.svg";
import { ReactComponent as ComputerScienceIcon } from "../Icons/Categories/cs.svg";
import { ReactComponent as LawsIcon } from "../Icons/Categories/laws.svg";
import { ReactComponent as PhysicsIcon } from "../Icons/Categories/physics.svg";
import { ReactComponent as MathematicsIcon } from "../Icons/Categories/mathematics.svg";

interface IProps {
  category: string;
}

export default function ({ category }: IProps) {
  return (
    <SvgIcon
      color="primary"
      viewBox="0 0 512 512"
      component={
        category === "Medicine"
          ? MedicineIcon
          : category === "Biology"
          ? BiologyIcon
          : category === "Chemistry"
          ? ChemistryIcon
          : category === "Technology"
          ? TechnologyIcon
          : category === "Computer Science"
          ? ComputerScienceIcon
          : category === "Law"
          ? LawsIcon
          : category === "Physics"
          ? PhysicsIcon
          : MathematicsIcon
      }
    />
  );
}
