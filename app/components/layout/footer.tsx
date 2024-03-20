/* css import */
import style from '/src/style/layout.module.scss';

/* icon import */

export default function FooterLayout() {
    return (
        <footer className={style.footer}>
            <div className="footer_inner inner_wrap">
                <div className="cont_box icon_box">
                    <div className={style.remote_box}>

                    </div>
                    <div className={style.branch_box}>

                    </div>
                    <div className={style.problem_box}>

                    </div>
                    <div className={style.port_box}>

                    </div>
                    <div className={style.debug_box}>

                    </div>
                    <div className={style.scan_box}>

                    </div>
                </div>
                <div className="cont_box">

                </div>
            </div>
        </footer>
    )
}