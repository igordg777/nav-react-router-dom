import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>

                <div id="sidebar">
                    <h1>React Router Contacts</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`zero`}>Дефолт</Link>
                            </li>
                            <li>
                                <Link to={`first`}>Первая</Link>
                            </li>
                            <li>
                                <Link to={`second`}>Вторая</Link>
                            </li>

                            {/* можно с перезагрузкой (однако принцип spa нарушается) */}
                            {/* <li>
                                <a href={`/second`}>Вторая</a>
                            </li> */}
                        </ul>
                    </nav>

                </div>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    );
}