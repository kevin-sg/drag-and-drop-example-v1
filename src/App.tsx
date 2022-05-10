import { StateProvider } from './context';
import { HomePage } from './pages';

function App(): React.ReactElement {
  return (
    <StateProvider>
      <HomePage />
    </StateProvider>
  );
}

export default App;
