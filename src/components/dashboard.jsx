import { Component, render, h } from 'preact';

// ========================================
// Dashboard
// ========================================

import Card from 'preact-material-components/Card';

import LayoutGrid from 'preact-material-components/LayoutGrid';

export default class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 style={{paddingLeft:16}}>Dashboard</h1>

        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell desktopCols="4" phoneCols="12">
              <Card className="dlx-card dlx-card__proto">
                <Card.Primary>
                  <Card.Title large="true">Updates</Card.Title>
                  <Card.Subtitle>9</Card.Subtitle>
                </Card.Primary>

                <Card.SupportingText>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </Card.SupportingText>

                <Card.Actions>
                  <Card.Action>OKAY</Card.Action>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }

  render2() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-card dlx-card dlx-card__proto ">
            <section className="mdc-card__primary">
              <h1 className="mdc-card__title mdc-card__title--large">
                Updates
              </h1>
              <h2 className="mdc-card__subtitle dlx-card__subtitle-float mdc-elevation--z1">
                8
              </h2>
            </section>
            <section className="mdc-card__supporting-text">
              <ul className="mdc-list mdc-list--avatar-list dlx-list">
                <li className="mdc-list-item">
                  <img
                    alt="Picture of Janet Perkins"
                    className="mdc-list-item__start-detail"
                    height="56"
                    src="https://firebasestorage.googleapis.com/v0/b/dlxstudios-843cf.appspot.com/o/pic1.jpg?alt=media&token=08e66d71-9407-4fdc-a198-0cffc84cb2ab"
                    width="56"
                  />{' '}
                  <span
                    className="mdc-typography--body2"
                    style={{ marginRight: 12 }}>
                    Sir Charles White
                  </span>{' '}
                  <span className="mdc-typography--caption">
                    Review will expire in 10 days
                  </span>{' '}
                  <a
                    aria-label="Remove from favorites"
                    className="mdc-list-item__end-detail material-icons "
                    href="#"
                    id="dlx-menu__more"
                    title="Menu">
                    more_vert
                  </a>
                </li>

                <li className="mdc-list-item">
                  <img
                    alt="Picture of Janet Perkins"
                    className="mdc-list-item__start-detail"
                    height="56"
                    src="https://firebasestorage.googleapis.com/v0/b/dlxstudios-843cf.appspot.com/o/pic1.jpg?alt=media&token=08e66d71-9407-4fdc-a198-0cffc84cb2ab"
                    width="56"
                  />{' '}
                  <span
                    className="mdc-typography--body2"
                    style={{ marginRight: 12 }}>
                    Sir Charles White
                  </span>{' '}
                  <span className="mdc-typography--caption">
                    Review will expire in 10 days
                  </span>{' '}
                  <a
                    aria-label="Remove from favorites"
                    className="mdc-list-item__end-detail material-icons "
                    href="#"
                    id="dlx-menu__more"
                    title="Menu">
                    more_vert
                  </a>
                </li>

                <li className="mdc-list-item">
                  <img
                    alt="Picture of Janet Perkins"
                    className="mdc-list-item__start-detail"
                    height="56"
                    src="https://firebasestorage.googleapis.com/v0/b/dlxstudios-843cf.appspot.com/o/pic1.jpg?alt=media&token=08e66d71-9407-4fdc-a198-0cffc84cb2ab"
                    width="56"
                  />{' '}
                  <span
                    className="mdc-typography--body2"
                    style={{ marginRight: 12 }}>
                    Sir Charles White
                  </span>{' '}
                  <span className="mdc-typography--caption">
                    Review will expire in 10 days
                  </span>{' '}
                  <a
                    aria-label="Remove from favorites"
                    className="mdc-list-item__end-detail material-icons "
                    href="#"
                    id="dlx-menu__more"
                    title="Menu">
                    more_vert
                  </a>
                </li>
              </ul>
            </section>
            <section className="mdc-card__actions">
              <button className="mdc-button mdc-button--dense mdc-card__action">
                VIEW ALL UPDATES
              </button>
            </section>
          </div>

          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--span-8-tablet mdc-card dlx-card dlx-card__proto ">
            <section className="mdc-card__primary">
              <h1 className="mdc-card__title mdc-card__title--large">
                Ranking
              </h1>
              <h2 className="mdc-card__subtitle dlx-card__subtitle-float background-accent color-primary mdc-elevation--z1">
                2
              </h2>
            </section>
            <section className="mdc-card__supporting-text">
              <ul className="mdc-list mdc-list--avatar-list dlx-list">
                <li className="mdc-list-item" />
              </ul>
            </section>
            <section className="mdc-card__actions">
              <button className="mdc-button mdc-button--dense mdc-card__action">
                VIEW STACK RANKING
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
