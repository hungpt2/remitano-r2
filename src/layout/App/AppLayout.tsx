import App from '../../pages/App';
import { BaseProvider } from '../../context/base';

const AppLayout = () => {
  return (
    <BaseProvider>
      <App />
    </BaseProvider>
  );
};

export default AppLayout;