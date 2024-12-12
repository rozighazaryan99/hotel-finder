import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StackNavigator from './src/navigation/StackNavigator';

// queryClient
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
    </QueryClientProvider>
  );
}

export default App;
