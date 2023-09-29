//components
import TimeHeader from './components/timeHeader'

import {util} from './util/index.js'

function App() {
  const greeting = util.getGreeting();
  return (
    <div>
      <TimeHeader greeting = {greeting} />
      <div></div>
    </div>
  );
}

export default App;
