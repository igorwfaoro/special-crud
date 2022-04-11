import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import ProviderComposerComponent from './components/ProviderComposer/ProviderComposer.component';
import './index.css';
import AppRouter from './routes';
import LoaderServiceProvider from './services/loader.service';
import ModalServiceProvider from './services/modal.service';
import PersonServiceProvider from './services/person.service';
import ToastServiceProvider from './services/toast.service';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ProviderComposerComponent components={[
      { component: ThemeProvider, props: { theme } },
      { component: RecoilRoot },
      { component: SnackbarProvider },
      { component: ModalServiceProvider },
      { component: LoaderServiceProvider },
      { component: ToastServiceProvider },
      { component: PersonServiceProvider },
    ]}>
      <CssBaseline />
      <AppRouter />
    </ProviderComposerComponent>
  </React.StrictMode>
);