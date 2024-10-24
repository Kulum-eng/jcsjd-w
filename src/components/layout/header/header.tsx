import { useState } from 'react';
import logo from './Logo.png'; // Imagen del logo
import { Button } from '@chakra-ui/react';
import { SignlessForm } from '@/components/SignlessForm/SignlessForm';
import { useDappContext } from '@/Context';
import { UserAccountDataModal } from '@/components/UserAccountDataModal/UserAccountData';
import { UserIcon } from 'lucide-react';
import { HiOutlineMenu } from 'react-icons/hi';
import perfil2 from '../../../assets/images/perfil.jpeg';
import { IoChevronDownSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss'; 

interface NavbarProps {
  onClickLogin: () => void;
}

export function Header({ onClickLogin }: NavbarProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const { sailsIsBusy } = useDappContext();
  const location = useLocation();

  const checkActive = (path: string) =>
    location.pathname === path
      ? `${styles.activeLink}`
      : `${styles.inactiveLink}`;

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
            <span className={styles.logoText}>ChainLinker</span>
          </Link>
        </div>

        <nav className={styles.navbarLinks}>
          <ul>
            <li className={checkActive('/')}>
              <Link to="/">Home</Link>
            </li>
            <li className={checkActive('/counter')}>
              <Link to="/counter">Contratos</Link>
            </li>
            <li className={checkActive('/job')}>
              <Link to="/job">Trabajos</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.navbarProfile}>
          <ul>
            <li className={styles.profileButton}>
              <Link to="/profile">
                <div className={styles.profileInfo}>
                  <div className={styles.profilePicture}>
                    <img src={perfil2} alt="Perfil" />
                    <div className={styles.statusIndicator}></div>
                  </div>
                  <div>
                    <h3>Angel Tagua</h3>
                    <p>Diseñador Gráfico</p>
                  </div>
                  <IoChevronDownSharp size={16} />
                </div>
              </Link>
            </li>

            <li>
              <button
                className={styles.loginButton}
                onClick={() => setModalOpen(true)}
              >
                Iniciar sesión
              </button>
            </li>

            <li className={styles.menuIcon}>
              <HiOutlineMenu size={22} />
            </li>
          </ul>
        </nav>
      </header>

      {modalOpen && <SignlessForm closeForm={() => setModalOpen(false)} />}
      {accountModalOpen && (
        <UserAccountDataModal closeModal={() => setAccountModalOpen(false)} />
      )}
    </>
  );
}
