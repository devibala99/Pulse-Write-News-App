/* eslint-disable react/prop-types */

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><span className="badge bg-light text-dark">PulseWire</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className="nav-link">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-link">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-link">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-link">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-link">
                            <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("entertainment")}>Entertainment</a>
                        </li>
                        <li className="nav-link">
                            <div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("science")}>Science</div>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
