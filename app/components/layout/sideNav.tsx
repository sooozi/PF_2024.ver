/* import */
import AccountIcon from '@/public/img/footer/AccountIcon';
import Link from "next/link";
import style from '/src/style/sideNav.module.scss';

/* icon import */
export default function SideNavLayout() {
    return (
        <nav className={style.nav_wrap}>
            <div className={style.side_nav_wrap}>
                <ul className="icon_list">
                    <li className={style.icon_explore}>홈</li>
                    <li className={style.icon_search}>블로그 내용 검색</li>
                    <li className={style.icon_control}></li>
                    <li className={style.icon_debug}></li>
                    <li className={style.icon_remote}></li>
                    <li className={style.icon_expantion}></li>
                </ul>
                <ul>
                    <li>
                        <Link href="/contact">
                            <a><AccountIcon className={style.icon}/></a>
                        </Link>
                    </li>
                    <li>테마 변경</li>
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