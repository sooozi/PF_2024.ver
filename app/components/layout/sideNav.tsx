/* css import */
import AccountIcon from '@/public/img/footer/AccountIcon';
import style from '/src/style/sideNav.module.scss';

/* icon import */
export default function SideNavLayout() {
    return (
        <nav className={style.nav_wrap}>
            <div className="side_nav_wrap nav_icon">
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
                        <AccountIcon className={style.icon} fill={'rgba(255, 255, 255, 0.5)'} />
                    </li>
                </ul>
            </div>
            <div className="side_nav_wrap nav_editor">
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