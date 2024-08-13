import Link from "next/link";
import headerNavigation from "../../../../../data/headerNavigation.json";

export const HeaderLeft = () => {
    return (
        <div className="header-left">
            <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
            </button>
            <Link href="/" className="logo">
                <img
                    src="/images/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                />
            </Link>
            <nav className="main-nav">
                <ul className="menu sf-arrows">
                    {headerNavigation.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url} className="sf-with-ul">
                                {item.title}
                            </Link>
                            {item.rightImageSrc ? (
                                <div className="megamenu megamenu-sm">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="menu-col">
                                                <div className="menu-title">
                                                    {item.subtitle}
                                                </div>
                                                <ul>
                                                    {item.sublinks.map(
                                                        (sublink, index) => (
                                                            <li key={index}>
                                                                <Link
                                                                    href={
                                                                        sublink.url
                                                                    }
                                                                >
                                                                    <span>
                                                                        {
                                                                            sublink.title
                                                                        }
                                                                        {sublink.isNew && (
                                                                            <span className="tip tip-new">
                                                                                New
                                                                            </span>
                                                                        )}
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner banner-overlay">
                                                <Link href={item.rightImageUrl}>
                                                    <img
                                                        src={item.rightImageSrc}
                                                        alt="Banner"
                                                    />

                                                    <div className="banner-content banner-content-bottom">
                                                        <div className="banner-title text-white">
                                                            {
                                                                item.rightImageTitle
                                                            }
                                                            <br />
                                                            <span>
                                                                <strong>
                                                                    {
                                                                        item.rightImageTitleStrong
                                                                    }
                                                                </strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <ul>
                                    {item.sublinks.map((sublink, index) => (
                                        <li key={index}>
                                            <Link href={sublink.url}>
                                                {sublink.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
