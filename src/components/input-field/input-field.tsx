import styles from './input-field.module.scss';
import classNames from 'classnames';

export interface InputFieldProps {
    className?: string;
    label?: string;
    name?: string;
    type?: string;
    textarea?: boolean;
}

export const InputField = ({ className, label, name, type, textarea }: InputFieldProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            <label className={styles['text-label']} htmlFor={name}>
                {label}
            </label>
            {textarea ? (
                <>
                    <textarea className={styles['text-input']} id={name}></textarea>
                </>
            ) : (
                <input className={styles['text-input']} id={name} type={type ? type : 'text'} />
            )}
        </section>
    );
};
