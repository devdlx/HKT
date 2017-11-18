import { Component, render } from "preact";
import { Match } from 'preact-router/match';


import { route } from "preact-router";
import Toolbar from "preact-material-components/Toolbar";
import Drawer from "preact-material-components/Drawer";
import List from "preact-material-components/List";
import Dialog from "preact-material-components/Dialog";
import Switch from "preact-material-components/Switch";
import Menu from 'preact-material-components/Menu';
import Button from 'preact-material-components/Button';
// import 'preact-material-components/Switch/style.css';
// import 'preact-material-components/Dialog/style.css';
// import 'preact-material-components/Drawer/style.css';
// import 'preact-material-components/List/style.css';
// import 'preact-material-components/Toolbar/style.css';

// ========================================
// Header
// ========================================
// import { Drawer } from './drawer';

export class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
  }

  componentDidMount() {
    // console.dir(this.header)
    this.resize();
    window.addEventListener("resize", event => {
      this.resize(event);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", event => {
      this.resize(event);
    });
  }

  resize() {
    if (window.innerWidth > 840) {
      // this.drawer.open = false;
      this.setState({ mobile: false });
    } else {
      // this.drawer.open = true;
      this.setState({ mobile: true });
    }
  }

  onSelected(selected) {
    // console.log("onSelected", selected, this.props)

    if (selected === "logout") {
      // this.props.user.signOut()
      // firebase
      //   .auth()
      //   .signOut()
      //   .then(() => {
      //     // Sign-out successful.
      //   })
      //   .catch(function(error) {
      //     // An error happened.
      //   });
    }

    if (selected === "logout") {
    }

    if (selected === "profile") {
      // console.log(this.props.user);
      //window.history.pushState("", "","http://"+document.domain+":8887/"+selected);
    }

    // if (selected === "logout"){

    //   firebase.auth.logout()

    // }

    // Profile Image
    // https://firebasestorage.googleapis.com/v0/b/dlxstudios-843cf.appspot.com/o/pic1.jpg?alt=media&token=08e66d71-9407-4fdc-a198-0cffc84cb2ab
  }

  render() {
    const { app, user, waiting } = this.props;
    const { match, location, history } = this.props;

    const { mobile } = this.state;
    // console.log('user.photoURL', user && user.photoURL || '')

    return (
      <header
        className={`mdc-toolbar mdc-toolbar--fixed mdc-toolbar--fixed-lastrow-only mdc-toolbar--waterfall dlx-toolbar mdc-toolbar animated animated__dlx ${user &&
        !waiting
          ? "slideInDown"
          : "animated__dlx_fadedOut"} `}
        ref={toolbar => {
          this.toolbar = toolbar;
        }}
      />
    );
  }
}

// Profile

// Account Settings

// Log out

const ProfileMenuLink2 = (props, context) => (
  <button
    type="button"
    onClick={() => {
      // context.history.push === history.push
      context.history.push("/new-location");
    }}
  >
    Click Me!
  </button>
);

export class Header extends Component {
  closeDrawer() {
    this.drawer.MDComponent.open = false;
    this.state = {
      darkThemeEnabled: true
    };
  }
  render(props) {
    const { waiting } = props;
    return (
      <div>
        <Toolbar className={`toolbar1 ${waiting ? "invis" : "fadeIn"}`} fixed>
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Icon
                menu={true}
                onClick={() => {
                  this.drawer.MDComponent.open = true;
                }}
              >
                menu
              </Toolbar.Icon>
              <Toolbar.Title>HKT Specialist</Toolbar.Title>
            </Toolbar.Section>

            <Toolbar.Section align-end={true}>
              <Menu.Anchor>
                <Button
                  onClick={e => {
                    this.menu.MDComponent.open = true;
                  }}
                >
                  Click for menu
          </Button>
                <Menu
                  ref={menu => {
                    this.menu = menu;
                  }}
                >
                  <Menu.Item>Hello1</Menu.Item>
                  <Menu.Item>Hello2</Menu.Item>
                  <Menu.Item>Hello3</Menu.Item>
                </Menu>
              </Menu.Anchor>

            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Drawer.TemporaryDrawer
          ref={drawer => {
            this.drawer = drawer;
          }}
        >
          <Drawer.TemporaryDrawerContent>
            <List>


              <Match path="/" >
                {({ matches, path, url }) => (

                  <List.LinkItem
                  className={matches && 'nav-active'}
                    onClick={() => {
                      route("/");
                      this.closeDrawer();
                    }}
                  >
                    <List.ItemIcon>home</List.ItemIcon>
                    Home
              </List.LinkItem>
                  
                )}
              
                </Match>


              <Match path="/profile" >
                {({ matches, path, url }) => (

                 

                  < List.LinkItem
                    className={matches && 'nav-active'}
                onClick={() => {
                  route("/profile");
                  this.closeDrawer();
                }}
                >
                <List.ItemIcon>account_circle</List.ItemIcon>
                Profile
              </List.LinkItem>

                )}

              </Match>





              <Match path="/profile/david" >
                {({ matches, path, url }) => (

                  < List.LinkItem
                    className={matches && 'nav-active'}
                    onClick={() => {
                      route("/profile/david");
                      this.closeDrawer();
                    }}
                  >
                    <List.ItemIcon>account_circle</List.ItemIcon>
                    David's Profile
              </List.LinkItem>

                )}

              </Match>


             


            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
        <Dialog
          ref={dialog => {
            this.dialog = dialog;
          }}
        >
          <Dialog.Header>Settings</Dialog.Header>
          <Dialog.Body>
            <div>
              Enable dark theme{" "}
              <Switch
                onClick={() => {
                  this.setState(
                    {
                      darkThemeEnabled: !this.state.darkThemeEnabled
                    },
                    () => {
                      if (this.state.darkThemeEnabled) {
                        document.body.classList.add("mdc-theme--dark");
                      } else {
                        document.body.classList.remove("mdc-theme--dark");
                      }
                    }
                  );
                }}
              />
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton accept={true}>okay</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
export default Header;

// <Toolbar.Section
//   align-end={true}

// >
//   <Toolbar.Icon onClick={() => {
//     this.dialog.MDComponent.show();
//   }}>settings</Toolbar.Icon>
// </Toolbar.Section>
