import PropTypes from "prop-types"

const Footer = ({ year, name, rights }) => (
    <footer className={"footer"}>
        <Copyright
            year={year}
            name={name}
            rights={rights}
        />
    </footer>
)

const Copyright = ({ year, name, rights }) => (
    <span className={"footer-copyright"}>© <cite>{year}, {name}</cite>. <em>{rights} Rights Reserved</em></span>
)

/*
 * Requires these conditions to be met when passing variables into the const Footer. Copyright can be ignored, as for
 * all intents and purposes, it is inaccessible from the outside, thus will follow Footer's rules.
 */
Footer.propTypes = {
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    rights: PropTypes.string.isRequired
}

export default Footer