import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {Links} from "./components/Links";
import {Link} from "./components/Link";

const Home = lazy(() => import('./pages/Home'))
const Posts = lazy(() => import('./pages/Posts'))


export default function App() {

    return (
        <div>
            <Links>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </Links>

            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}


