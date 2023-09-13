import styles from './contact.module.scss';
import classNames from 'classnames';
import ill from '../../assets/images/mw.png';
import { InputField } from '../input-field/input-field';

export interface ContactProps {
    className?: string;
}

export const Contact = ({ className }: ContactProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            <header className={styles['text-wrap']}>
                <h1 className={styles['text-lg']}>LET’S WORK TOGETHER</h1>
                <p className={styles['text-sm']}>
                    Do you have any idea on a project we can work together on? or want to create a
                    site but have no ideas? Contact me through the my personal email using the
                    inputs listed below.
                </p>
            </header>
            <section className={styles['main-c']}>
                <figure>
                    <img className={styles.djih} src={ill} alt={'Illustration image'} />
                </figure>
                <form className={styles.okjnk} onSubmit={(e) => e.preventDefault()}>
                    <InputField label={'Name'} name={'Name'} />
                    <InputField label={'Email'} name={'Email'} type={'Email'} />
                    <InputField label={'Message'} name={'Message'} textarea={true} />
                    <button className={styles['submit-btn']} type="submit">
                        Let’s talk
                    </button>
                </form>
            </section>
            <footer className={styles.footer}>
                <p className={styles['footer-txt']}>
                    Copyright Adievughware Oghenetega&nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                    >
                        <path
                            d="M9.39004 0.0914307C4.74655 0.0914307 0.981445 3.85653 0.981445 8.50003C0.981445 13.1435 4.74655 16.9086 9.39004 16.9086C14.0335 16.9086 17.7986 13.1435 17.7986 8.50003C17.7986 3.85653 14.0335 0.0914307 9.39004 0.0914307ZM9.39004 15.4822C5.53485 15.4822 2.4079 12.3552 2.4079 8.50003C2.4079 4.64484 5.53485 1.51789 9.39004 1.51789C13.2452 1.51789 16.3722 4.64484 16.3722 8.50003C16.3722 12.3552 13.2452 15.4822 9.39004 15.4822ZM9.49515 5.48382C10.4899 5.48382 11.1656 6.11822 11.2407 7.04917C11.2463 7.128 11.312 7.18806 11.3908 7.18806H12.4551C12.5039 7.18806 12.5433 7.14865 12.5433 7.09985C12.5433 5.47256 11.2595 4.33327 9.48952 4.33327C7.42679 4.33327 6.23682 5.72594 6.23682 8.02704V9.00867C6.23682 11.2929 7.42679 12.6668 9.48952 12.6668C11.2538 12.6668 12.5433 11.5632 12.5433 10.0128C12.5433 9.96402 12.5039 9.92461 12.4551 9.92461H11.389C11.3101 9.92461 11.2463 9.98467 11.2388 10.0616C11.16 10.9269 10.4862 11.5219 9.49327 11.5219C8.26765 11.5219 7.57694 10.6228 7.57694 9.01431V8.02704C7.57882 6.39412 8.2714 5.48382 9.49515 5.48382Z"
                            fill="white"
                        />
                    </svg>
                    &nbsp;2023. All rights reserved.
                </p>
            </footer>
        </section>
    );
};
