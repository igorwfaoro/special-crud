import { Outlet } from 'react-router-dom';
import DrawerMenuComponent from './components/DrawerMenu/DrawerMenu.component';
import NavbarComponent from './components/Navbar/Navbar.component';
import styles from './App.module.scss';

function App() {
  return (
    <main>
      <NavbarComponent />
      <DrawerMenuComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
