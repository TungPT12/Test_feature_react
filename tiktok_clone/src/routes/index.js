import Home from "../pages/Home"
import UploadVideo from "../pages/Upload"
import Following from "../pages/following"
import HeaderOnly from "../components/Layout/HeaderOnly"
import Profile from "../pages/Profile"
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following},
    { path: "/:nickname", component: Profile},
    { path: "/upload", component: UploadVideo, layout: HeaderOnly}
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}