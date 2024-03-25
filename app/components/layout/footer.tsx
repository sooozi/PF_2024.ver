/* css import */
import style from '/src/style/layout.module.scss';

/* icon import */

export default function FooterLayout() {
    return (
        <footer className={style.footer}>
            <div className="footer_inner inner_wrap">
                <div className="cont_box icon_box">
                    <div className={style.icon_remote_open}>

                    </div>

                    <div className={style.icon_main}>

                    </div>

                    <div className={style.icon_sync}>

                    </div>

                    <div className={style.icon_problem}>

                    </div>

                    <div className={style.icon_port}>

                    </div>

                    <div className={style.icon_state}>

                    </div>
                </div>
                <div className="cont_box">
                    <div className={style.icon_remote_open}>

                    </div>

                    <div className={style.icon_main}>

                    </div>

                    <div className={style.icon_sync}>

                    </div>

                    <div className={style.icon_problem}>

                    </div>

                    <div className={style.icon_port}>

                    </div>

                    <div className={style.icon_state}>

                    </div>
                </div>
            </div>
        </footer>
    )
}