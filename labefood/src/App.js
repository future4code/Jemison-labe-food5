import { GlobalState } from './Global/GlobalState';
import { Router} from './Routes/router'

const App = () => {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
