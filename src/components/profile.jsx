import { Component, render } from 'preact';

// ========================================
// Profile
// ========================================
import Card from 'preact-material-components/Card';
import LayoutGrid from 'preact-material-components/LayoutGrid';

/** handles /profile and /profile/:user */
export const Profile1 = ({ user, ...props }) => {
  return (
    <section class="profile">
      <h2>Profile: {user || 'you'}</h2>
      <p>This is some text about {user || 'you'}.</p>
      <pre>{JSON.stringify({ user, ...props }, 0, '  ')}</pre>
    </section>
  );
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      profile: {},
      waiting: true
    };
  }

  componentDidMount() {
    // console.log('Profile Props:',this.props)
    

    

    // window.app.current_user_profile_ref
  }

  render(props, state) {
    
    // const { waiting, profile, user } = state;

    let profile = {}, app = {}, user = {}
    if (this.props.userid && this.props.userid === 'me') {
      user = this.props.user
      profile = this.props.profile
    }else{
      user = this.state.user
      profile = this.state.profile
    }

    return (
      <div class="page-profile">
        <div
          className="header-profile"
          style={{
            backgroundImage: `url(${profile && profile.backgroundImage
              ? profile.backgroundImage
              : 'http://www.xsjjys.com/data/out/230/WHDQ-513656905.jpg'})`
          }}>
          
        </div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="8">
              
              <Card className="dlx-card profile-card">
               
                <Card.HorizontalBlock>

                  <div
                    className="header-profile-image"
                    style={{ backgroundImage: `url(${user && user.photoURL})` }}
                  />
                  
                  <Card.Primary>
                    <Card.Title large>{user && user.displayName}</Card.Title>
                    <Card.Subtitle>{user && user.email}</Card.Subtitle>
                  </Card.Primary>


                  <h2 className="profile-card__rank">9</h2>


                  <Card.MediaItem src="some-picture.jpg" x="1dot5" />
                </Card.HorizontalBlock>
              </Card>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}

export default Profile;
