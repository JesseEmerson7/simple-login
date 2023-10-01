//components
import TimeHeader from "./components/timeHeader";
import Form from "./components/form";
import Footer from "./components/footer";
import Reasons from "./components/reasons";

import { util } from "./util/index.js";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  const greeting = util.getGreeting();
  return (
    <div>
      <TimeHeader greeting={greeting} />
      {page ? <Form setPage={setPage} /> : <Reasons setPage={setPage} />}
      <Footer />
    </div>
  );
}

export default App;
