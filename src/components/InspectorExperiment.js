import React from "react";
import Experiment, {
  ConsentForm,
  InformationScreen,
  WizardProgress,
  useConfiguration,
  withGridItem,
} from "@hcikit/react";

import { getCurrentProps, getCurrentIndex } from "@hcikit/workflow";

function replacer(key, value) {
  if (key == "children") return undefined;
  else return value;
}

let SubConfig = ({ configuration, index, currentIndex }) => {
  console.log(currentIndex, index);
  let selected = currentIndex === index;

  return (
    <div>
      <div
        style={{
          backgroundColor: selected ? "#eee" : "initial",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify(configuration, replacer, 2)}
      </div>
      {configuration.children && (
        <div>
          children : [
          {configuration.children.map((subConfiguration, i) => (
            <SubConfig
              configuration={subConfiguration}
              currentIndex={index}
              index={[...index, i]}
            />
          ))}
          ]
        </div>
      )}
    </div>
  );
};

let Inspector = withGridItem(() => {
  let configuration = useConfiguration();
  let props = getCurrentProps(configuration);
  let currentIndex = getCurrentIndex(configuration);
  return (
    <div>
      <h2>Props</h2>
      <pre>
        <code style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(props, null, 2)}
        </code>
      </pre>
      <h2>Configuration</h2>
      <pre>
        <code>
          <SubConfig
            currentIndex={currentIndex}
            index={[]}
            configuration={configuration}
          />
        </code>
      </pre>
    </div>
  );
}, "sidebar");

const GridLayoutWithSidebar = ({ children }) => {
  return (
    <div
      id="grid-layout"
      style={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "min-content 1fr min-content",
        gridTemplateAreas: `
      "header sidebar"
      "task sidebar"
      "footer sidebar"`,
      }}
    >
      {children}
    </div>
  );
};

const InspectorExperiment = () => {
  return (
    <div className="card" style={{ textAlign: "initial", color: "initial" }}>
      <Experiment
        Layout={GridLayoutWithSidebar}
        configuration={{
          // tasks: ["WizardProgress", "Inspector"],
          tasks: ["WizardProgress", "Inspector"],
          children: [
            {
              task: "InformationScreen",
              content: `# HCI Kit Experiment
This is a live running experiment. On the right hand side you can see the configuration that this experiment is consuming and get a peek into how the framework actually works. Try continuing onto the next task.`,
              label: "Introduction",
            },
            {
              task: "ConsentForm",
              content: `# Consent Forms
HCI Kit comes with a few built-in tasks, for example consent forms. The nice part about the consent forms is they use markdown so you can format them however you would like, but very easily.`,
              questions: [
                {
                  label: "I agree, built-in consent forms are a great idea.",
                  required: true,
                },
              ],
            },
          ],
        }}
        tasks={{ ConsentForm, InformationScreen, WizardProgress, Inspector }}
      />
    </div>
  );
};

// TODO: Try refreshing the window to see what happens.

export default InspectorExperiment;
