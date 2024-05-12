import { About } from "./components/About"
import { CV } from "./components/CV"
import { CollapseContent } from "./components/CollapseContent"
import { Contact, Projects, Start } from "./pages"

const App = () => {

  return (
    <>
      <section style={{scrollSnapAlign: "start"}} className="h-screen">
      <CollapseContent />
      </section>
      
      <Projects />
      <Contact />
      
    </>
  )
}

export default App
