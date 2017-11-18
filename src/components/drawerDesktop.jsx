
import { Component, render } from 'preact';





// ========================================
// DrawerDesktop
// ========================================

class DrawerDesktop extends Component {


  constructor(props) {
    super(props);
    this.state = {
      open: false
    };



  }


  componentDidMount() {
    // const drawer = new MDCPersistentDrawer(this.desktopdrawerref);
    const drawer = mdc.drawer.MDCPersistentDrawer.attachTo(this.desktopdrawerref)
    this.drawer = drawer;
    //   console.log(this.nav)
    //   this.drawer.unlisten("touchmove")
    //   this.nav.unlisten("toucstart")

    // this.drawer.open = true

    this.resize()
    window.addEventListener('resize', (event) => { this.resize(event) });

  }

  componentWillUnmount() {
    window.removeEventListener("resize", (event) => { this.resize(event) });
  }

  resize() {
    // log(window.innerWidth < 841)

    if (window.innerWidth < 841) {
      // this.drawer.open = false;
      this.setState({ open: false })

    } else {
      // this.drawer.open = true;
      this.setState({ open: true })
    }
  }

  toggle(e) {
    //   console.log(e)
    console.log(this.drawer.open = !this.drawer.open)
  }

  shouldComponentUpdate(newp, news) {


    if (newp === this.props || news === this.state) {
      return false
    }


    // log('Drawer:newp.waiting',newp.waiting)
    if (this.props.waiting !== newp.waiting && newp.waiting) {
      this.drawer.open = false;
      return false
    }


    this.drawer.open = news.open;



    return true
  }



  render() {
    const { app, user, waiting } = this.props
    console.log('Drawer:waiting', waiting)
    // console.log('Drawer:open', this.state.open)
    return (
      <aside className={`mdc-persistent-drawer mdc-toolbar-fixed-adjust `} ref={(drawer) => { this.desktopdrawerref = drawer }} style={this.props.style} hidden={waiting}>
        <nav className="mdc-persistent-drawer__drawer" ref={(nav) => { this.nav = nav }}>




          <div className="mdc-list-group">
            <nav className="mdc-list">
              <NavLink exact activeClassName="nav-active" to='/' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">dashboard</i>Dashboard
            </NavLink>
              <NavLink exact activeClassName="nav-active" to="/admin/pages" className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Pages
            </NavLink>
              <NavLink exact activeClassName="nav-active" to='/admin/media' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Media
            </NavLink>
            </nav>

            <hr className="mdc-list-divider" />

            <nav className="mdc-list">
              <NavLink activeClassName="nav-active" to='/admin/plugins/Soundcloud' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>Soundcloud
            </NavLink>
              <NavLink exact activeClassName="nav-active" to='/admin/plugins/Youtube' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Youtube
            </NavLink>
              <NavLink exact activeClassName="nav-active" to='/admin/plugins/Eventbrite' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Eventbrite
            </NavLink>
            </nav>


            <hr className="mdc-list-divider" />


            <nav className="mdc-list">
              <NavLink exact activeClassName="nav-active" to='/admin/settings' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>Settings
            </NavLink>
              <NavLink exact activeClassName="nav-active" to='/admin/trash' className="mdc-list-item">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
            </NavLink>
              <a className="mdc-list-item" onClick={this.signout}>
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Sign Out
            </a>
            </nav>

          </div>







        </nav>
      </aside>
    );
  }


}