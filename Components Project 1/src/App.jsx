import Header from "./components/header/header";
import CoreConcept from "./components/core/coreconcepts";
import componentsImg from "./assets/components.png";
import componentsImg1 from "./assets/config.png";
import componentsImg2 from "./assets/jsx-ui.png";
import componentsImg3 from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept 
              title="Components"
              description="The Core UI Building Block"
              image={componentsImg}
            />
            <CoreConcept 
              title="Components"
              description="The Core UI Building Block"
              image={componentsImg1}
            />
            <CoreConcept 
              title="Components"
              description="The Core UI Building Block"
              image={componentsImg2}
            />
            <CoreConcept 
              title="Components"
              description="The Core UI Building Block"
              image={componentsImg3}
            /> */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

        {/* Button Section */}

        <section id="examples">
          <h2>Example</h2>

          {/* <TabButton name = "Button"/> */}

          <menu>
            <TabButton
              isSelected={selectedTopic === "component"}
              onSelect={() => handleSelect("component")}
              props={() => handleSelect("component")}
            >
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
              props={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
              props={() => handleSelect("props")}
            >
              Props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
              props={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please click a button</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/* {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;
