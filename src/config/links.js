import About from "../pages/About"
import Call from "../pages/Call"
import Estimate from "../pages/Estimate"
import Join from "../pages/Join"
import Landing from "../pages/Landing/Landing"
import Resources from "../pages/Resources"
import Deposit207_160 from "../pages/Deposit/Deposit207_160"
import Deposit207 from "../pages/Deposit/Deposit207"
import Deposit802 from "../pages/Deposit/Deposit802"
import Test from "../pages/Test"


/**
 * All pages must be added to this array to be accessible
 * 
 * name - displayed name in navigation
 * shortName - minified name for limited screen space
 * path - define url of page; can spoof subdirectory (eg 'resources/interstate')
 * component - page React <Component />, must be imported (above)
 * position - position in navigation bar:
 *              "primary" - left aligned in nav nar or in nav menu on small screens
 *              "secondary" - right aligned in nav nar or in nav menu on small screens
 *              "hidden" - Not shown in navigation bar or menu, but accessible through
 *                         other means, such as links in pages
 */
const links = [
    {
        "name": "Local Muscle Movers",
        "shortName": "Home",
        "path": "/",
        "component": <Landing />,
        "position": "primary"
    },
    {
        "name": "About",
        "shortName": null,
        "path": "/about",
        "component": <About />,
        "position": "primary"
    },
    {
        "name": "Resources",
        "shortName": null,
        "path": "/resources",
        "component": <Resources />,
        "position": "primary"
    },
    {
        "name": "Join Our Crew",
        "shortName": "Join",
        "path": "/join",
        "component": <Join />,
        "position": "primary"
    },
    {
        "name": "Hire Us",
        "shortName": null,
        "path": "/estimate",
        "component": <Estimate />,
        "position": "secondary"
    },
    {
        "name": "Call us",
        "shortName": "call",
        "path": "/call",
        "component": <Call />,
        "position": "hidden"
    },
    {
        "name": "Deposit 207 $160",
        "shortName": null,
        "path": "/160-deposit-207",
        "component": <Deposit207_160 />, // eslint-disable-line
        "position": "hidden"
    },
    {
        "name": "Deposit 207 $250",
        "shortName": null,
        "path": "/deposit-207",
        "component": <Deposit207 />,
        "position": "hidden"
    },
    {
        "name": "Deposit 802",
        "shortName": null,
        "path": "/deposit-802",
        "component": <Deposit802 />,
        "position": "hidden"
    },
    {
        "name": "Test",
        "shortName": null,
        "path": "/test",
        "component": <Test />,
        "position": "hidden"
    }
]

export default links