import ReactDOM from 'react-dom/client';
import AppLayout from './layout/App';
import 'element-theme-default';
import './style/index.scss';

import { i18n } from 'element-react';
import locale from 'element-react/src/locale/lang/en';
i18n.use(locale);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppLayout />
);