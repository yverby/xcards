import ReactDOM from 'react-dom/client';

import { App } from '@src/App';
import { ThemeProvider } from '@src/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
