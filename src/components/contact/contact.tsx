import styles from './contact.module.scss';
import classNames from 'classnames';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return <div className={classNames(styles.root, className)}>Contact</div>;
};
