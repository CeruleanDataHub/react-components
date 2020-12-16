import { withKnobs } from "@storybook/addon-knobs";
import React, { useEffect, useState } from "react";
import SpinnerTentative from "./SpinnerTentative";

export default {
  title: "SpinnerTentative",
  component: SpinnerTentative,
  decorators: [withKnobs]
};

export const SpinnerTentativeStory = () => {
  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <SpinnerTentative condition={false}>Irrelevant</SpinnerTentative>
    </div>
  );
};

export const ResolveSpinnerTentativeStory = () => {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCondition(true);
    }, 5000);
  });

  return (
    <div style={{ minHeight: 250, width: 300 }}>
      <SpinnerTentative condition={condition}>
        This is shown after condition resolves
      </SpinnerTentative>
    </div>
  );
};
