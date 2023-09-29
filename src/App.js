//components
import TimeHeader from "./components/timeHeader";
import Form from "./components/form";
import Footer from "./components/footer"

import { util } from "./util/index.js";

function App() {
  const greeting = util.getGreeting();
  return (
    <div>
      <TimeHeader greeting={greeting} />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
