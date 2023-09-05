import { Link, Outlet } from "react-router-dom";
import './index.css';
import { MdOutlinePerson } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Root() {
    return (
        <>
            <main>
                <div className='sidebar' id="sidebar">
                    <div className='search-box'>
                        <button className="star-btn">
                            <RxHamburgerMenu size={30} />
                        </button>
                    </div>
                    <div className='search-box'>
                        <form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={true}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </form>
                        <form method="post">
                            <button type="submit">New</button>
                        </form>
                    </div>
                    <nav className='nav'>
                        <ul>
                            <li>
                                <Link to={`contacts/1`}>
                                    <MdOutlinePerson size={30} />
                                    Your Name
                                </Link>
                            </li>
                            <li>
                                <Link to={`contacts/2`}>
                                    <MdOutlinePerson size={30} />
                                    Your Name
                                </Link>
                            </li>
                            <li>
                                <Link to={`contacts/3`}>
                                    <MdOutlinePerson size={30} />
                                    Your Name
                                </Link>
                            </li>

                            <li>
                                <Link to={`/f`}>Not found page!</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail">
                    <Outlet />
                </div>
            </main>
        </>
    );
}