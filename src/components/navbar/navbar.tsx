import styles from './navbar.module.scss';
import classNames from 'classnames';
import logo from '../../assets/images/logo.svg';
import menuBar from '../../assets/icons/menu.png';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.navbar}>
                <section className={styles['logo-group']}>
                    <figure className={styles.logo}>
                        <img alt="AOT Logo" src={logo} className={styles['logo-img']} />
                    </figure>

                    <span className={styles['logo-text']}>
                        Adievughware Oghenetega Ui-Ux/Web Designer
                    </span>
                </section>
                <section className={styles['menu-toggle']}>
                    <span className={styles['toggle-span']}>Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="17"
                        viewBox="0 0 24 17"
                        fill="none"
                    >
                        <path
                            d="M1.33333 16.9658H22.6667C23.4 16.9658 24 16.3658 24 15.6325C24 14.8992 23.4 14.2992 22.6667 14.2992H1.33333C0.6 14.2992 0 14.8992 0 15.6325C0 16.3658 0.6 16.9658 1.33333 16.9658ZM1.33333 10.2992H22.6667C23.4 10.2992 24 9.69915 24 8.96582C24 8.23249 23.4 7.63249 22.6667 7.63249H1.33333C0.6 7.63249 0 8.23249 0 8.96582C0 9.69915 0.6 10.2992 1.33333 10.2992ZM0 2.29915C0 3.03249 0.6 3.63249 1.33333 3.63249H22.6667C23.4 3.63249 24 3.03249 24 2.29915C24 1.56582 23.4 0.96582 22.6667 0.96582H1.33333C0.6 0.96582 0 1.56582 0 2.29915Z"
                            fill="white"
                        />
                    </svg>
                </section>
            </nav>
        </div>
    );
};
