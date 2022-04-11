import { SnackbarProvider } from 'notistack';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import DrawerMenuComponent from './components/DrawerMenu/DrawerMenu.component';
import NavbarComponent from './components/Navbar/Navbar.component';
import ProviderComposerComponent from './components/ProviderComposer/ProviderComposer.component';
import LoaderServiceProvider from './services/loader.service';
import PersonServiceProvider from './services/person.service';
import ToastServiceProvider from './services/toast.service';

function App() {
  return (
    <ProviderComposerComponent components={[
      RecoilRoot,
      SnackbarProvider,
      LoaderServiceProvider,
      ToastServiceProvider,
      PersonServiceProvider,
    ]}>
      <NavbarComponent />
      <DrawerMenuComponent />
      <Outlet />
    </ProviderComposerComponent>
  );
}

export default App;
