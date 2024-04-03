/* css import */
import style from '/src/style/layout.module.scss';

/* icon import */
export default function SideNavLayout() {
    return (
        <nav className="nav_wrap">
            <div className="side_nav_wrap nav_icon">
                <ul className="icon_list">
                    <li className={style.icon_explore}></li>
                    <li className={style.icon_search}></li>
                    <li className={style.icon_control}></li>
                    <li className={style.icon_debug}></li>
                    <li className={style.icon_remote}></li>
                    <li className={style.icon_expantion}></li>
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