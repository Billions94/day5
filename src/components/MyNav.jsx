


const MyNav = () => (   
<nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <a className="navbar-brand" href="home.html">
    <img src="./assets/Netflix_Logo_CMYK.png" alt="" width="95px" />
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link active" href="">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          TV Shows
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Movies
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          Recently Added
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          My List
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="backoffice.html">
          B/O
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <div className="btn-group dropdown">
        <img className="logo" src="./assets/search.png" />
        <a
          className="text-light nav-link dropdown-toggle"
          href=""
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="span mr-3">KIDS</span>
          <span>
            <img src="./assets/bell.png" width={18} className="mr-3" />{" "}
            <img src="./assets/kids_icon.png" width={25} />
          </span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="hhh">
            {" "}
            <img src="./assets/avatar.png" width={25} /> Alexander
          </a>
          <a className="dropdown-item" href="manage-profile">
            Manage Profiles
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="account">
            Account
          </a>
          <a className="dropdown-item" href="help-center">
            Help Center
          </a>
          <a className="dropdown-item" href="sign-out">
            Sign out of Netflix
          </a>
        </div>
      </div>
    </form>
  </div>
</nav>
)

export default MyNav