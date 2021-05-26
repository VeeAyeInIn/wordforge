import logo from "../resources/WordForge.png"
import settings from "../resources/SettingsIcon.png";

/**
 * Creates a <tt>Header</tt> object to be used in place of HTML (JSX).
 * @returns {JSX.Element} formatted HTML header object
 * @constructor
 */
const Header = () => (
    <header className={"header"}>
        <img
            className={"header-logo"}
            src={logo}
            alt={"Word Forge"}
        />
        <img
            className={"header-settings"}
            src={settings}
            alt={"Settings"}
        />
    </header>
)

export default Header