import styles from './hero-section.module.scss';
import classNames from 'classnames';
import heroImg from '../../assets/images/aot-logo.svg';
import { LetsTalk } from '../lets-talk/lets-talk';
import { LearnMoreBtn } from '../learn-more-btn/learn-more-btn';

export interface HeroSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HeroSection = ({ className }: HeroSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={styles['hero-section']}>
                <figure>
                    <img className={styles['hero-img']} src={heroImg} alt="Hero image" />
                </figure>
                <section className={styles['hero-content']}>
                    <p className={styles['hero-p']}>
                        Working closely with clients to understand their needs and deliver designs
                        that exceed expectations.
                    </p>
                    <span className={styles['hero-txt2']}>Turning your ideas into reality.</span>
                    <section className={styles.slkj}>
                        <LetsTalk />
                        <LearnMoreBtn />
                    </section>
                </section>
            </section>
        </div>
    );
};
