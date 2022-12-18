import PropTypes from "prop-types";

function App({ categories }: { categories: string }) {
  // props can be only string
  const categoriesParsed = JSON.parse(categories);

  const selectCategory = (event: any, category: any) => {
    event.stopPropagation();
    (document as any).dispatchEvent(
      new CustomEvent("select-category", {
        bubbles: true,
        composed: true,
        detail: category,
      })
    );
  };

  const goHome = (event: any) => {
    event.stopPropagation();
    (document as any).dispatchEvent(
      new CustomEvent("go-home", {
        bubbles: true,
        composed: true,
      })
    );
  };

  const css = `
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }    
    .container {
      margin: 0 auto;
      padding: 2rem 3rem 2rem;
      width: 1470px;
    }
    @media (max-width: 1560px) {
      .container {
        width: 1270px;
      }
    }
    @media (max-width: 1260px) {
      .container {
        width: 960px;
      }
    }
    @media (max-width: 960px) {
      .container {
        width: 660px;
      }
    }
    @media (max-width: 660px) {
      .container {
        width: 460px;
        grid-template-columns: 100vw;
        margin: 0;
      }
    }  
    footer {
      padding: 2rem 1.5rem;
    }
    .footer {
      align-items: start;
      background: black;
      color: white;
    }
    .footer__items {
      grid-area: items;
    }
    .footer__text {
      grid-area: text;
    }
    .footer-items__list {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }
    .footer-items__item {
      padding-bottom: 0.5rem;
    }
    .footer-items__item::first-letter {
      text-transform:capitalize;
    }
    .footer-items__item > a {
      color: white;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 40px;
      grid-auto-flow: row;
      justify-content: center;
      align-content: center;
      justify-items: center;
      grid-template-areas: "left main main main right";
    }
    .footer-grid__main {
      justify-self: stretch;
      grid-area: main;
    }
    .footer-grid__left {
      justify-self: stretch;
      grid-area: left;
    }
    .footer-grid__right {
      justify-self: stretch;
      grid-area: right;
    }
    @media (max-width: 960px) {
      .footer-grid {
        display: block;
      }
      .footer-grid__main {
        padding-bottom: 3rem;
      }
      .footer-grid__left {
        padding-bottom: 1rem;
      }
    }
    .footer-logo {
      border: 2px solid white;
      color: white;
      text-align: center;
      padding: 5px 30px;
      cursor: pointer;
      width: 60px;
    }
    .footer-text__description {
      padding-right: 2rem;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-grid__left">
              <div className="footer__items footer-items">
                <h2 className="footer-items__title">Categories</h2>
                <ul className="footer-items__list">
                  {categoriesParsed.map((category: string, id: number) => (
                    <li key={id} className="footer-items__item">
                      <a href="#" onClick={(e) => selectCategory(e, category)}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="footer-grid__main">
              <div className="footer__text footer-text">
                <h2 className="footer-text__title">About us</h2>
                <p className="footer-text__description">
                  Looking for a comfortable, stylish T-shirt? Look no further
                  than our collection! Made from 100% cotton, our T-shirts are
                  soft and comfortable to wear. It's also durable and
                  machine-washable. Whether you're dressing up for a casual day
                  or working out at the gym, our T-shirts is a great choice.
                </p>
              </div>
            </div>

            <div className="footer-grid__right">
              <div className="footer-logo" onClick={goHome}>
                T-SHOP
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

App.propTypes = {
  categories: PropTypes.string.isRequired,
};

export default App;
