import {text} from './something.json';
import styles from './something.scss';

export default function Something () {
    return <h1 className={styles.heading}>{text}</h1>;
}