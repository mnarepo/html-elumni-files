import Header from "./components/header/header";
import CoreConcept from "./components/core/coreconcepts";
import componentsImg from "./assets/components.png";
import componentsImg1 from "./assets/config.png";
import componentsImg2 from "./assets/jsx-ui.png";
import componentsImg3 from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          {/* <TabButton name = "Button"/> */}
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
