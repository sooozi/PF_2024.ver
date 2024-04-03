/* css import */
import AccountIcon from '@/public/img/footer/AccountIcon';
import style from '/src/style/sideNav.module.scss';

/* icon import */
export default function SideNavLayout() {
    return (
        <nav className={style.nav_wrap}>
            <div className={style.side_nav_wrap}>
                <ul className="icon_list">
                    <li className={style.icon_explore}></li>
                    <li className={style.icon_search}></li>
                    <li className={style.icon_control}></li>
                    <li className={style.icon_debug}></li>
                    <li className={style.icon_remote}></li>
                    <li className={style.icon_expantion}></li>
                </ul>
                <ul>
                    <li>
                        <AccountIcon className={style.icon}/>
                    </li>
                </ul>
            </div>
            <div className={style.side_nav_wrap}>
                <ul className="icon_list">
                    <li className={style.icon_incoding}></li>
                    <li className={style.icon_language}></li>
                    <li className={style.icon_goLive}></li>
                    <li className={style.icon_alarm}></li>
                </ul>
            </div>
        </nav>
    )
}