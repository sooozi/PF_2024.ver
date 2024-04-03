/* css import */
import style from '/src/style/footer.module.scss';

/* icon import */
import AccountIcon from "@/public/img/footer/AccountIcon";

export default function FooterLayout() {
    return (
        <footer className={style.footer_wrap}>
            <div className="footer_inner inner_wrap">
                <div className="cont_box icon_box">
                    <div className={style.icon_remote_open}>
                        <AccountIcon className={style.icon} fill={'#2196f3'} />
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