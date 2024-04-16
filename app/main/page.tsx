/* css import */
import styles from '/src/style/common.module.scss';
import '/src/style/global.scss';

/* icon import */

export default function Home() {
    return (
        <div className={styles.pageWrap}>
            <h2>home page</h2>
        </div>
    );
}