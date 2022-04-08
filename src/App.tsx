import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import DrawerMenuComponent from './components/DrawerMenu/DrawerMenu.component';
import NavbarComponent from './components/Navbar/Navbar.component';
import ProviderComposer from './components/ProviderComposer/provider.composer';
import PersonServiceProvider from './services/person.service';

function App() {
  return (
    <ProviderComposer components={[
      RecoilRoot,
      PersonServiceProvider
    ]}>
      <NavbarComponent />
      <DrawerMenuComponent />
      <Outlet />
    </ProviderComposer>
  );
}

export default App;
