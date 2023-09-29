//components
import TimeHeader from "./components/timeHeader";
import Form from "./components/form";

import { util } from "./util/index.js";

function App() {
  const greeting = util.getGreeting();
  return (
    <div>
      <TimeHeader greeting={greeting} />
      <Form />
    </div>
  );
}

export default App;
