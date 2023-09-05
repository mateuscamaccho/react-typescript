import { Link, Outlet } from "react-router-dom";
// import { getContacts } from "../contacts/index";
import './index.css';


export async function loader() {
    //   const contacts = await getContacts();
    //   return { contacts };
}

export default function Root() {
    return (
        <>
            <main>
                <div className='sidebar' id="sidebar">
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
                                <Link to={`contacts/1`}>Your Name</Link>
                            </li>
                            <li>
                                <Link to={`contacts/2`}>Your Name</Link>
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