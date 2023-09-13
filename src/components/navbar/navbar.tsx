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
                    <figure>
                        <img alt="Menu icon" src={menuBar} className={styles['menu-icon']} />
                    </figure>
                </section>
            </nav>
        </div>
    );
};
