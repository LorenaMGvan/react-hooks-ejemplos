import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <NavLink
                            className={ ({ isActive}) => `nav-link ${ isActive ? 'active': '' } `}  
                            to="/">Home</NavLink>
                        <NavLink
                            className={ ({ isActive}) => `nav-link ${ isActive ? 'active': '' } `}  
                            to="/about">About</NavLink>
                        <NavLink
                            className={ ({ isActive}) => `nav-link ${ isActive ? 'active': '' } `}  
                            to="/login">Login</NavLink>
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}