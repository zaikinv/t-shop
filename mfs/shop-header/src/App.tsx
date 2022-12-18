import PropTypes from "prop-types";

function App({ categories, cart }: { categories: string; cart: string }) {
  // props can be only string
  const categoriesParsed = JSON.parse(categories);
  const cartParsed = JSON.parse(cart);

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

  const goToCart = (event: any) => {
    event.stopPropagation();
    (document as any).dispatchEvent(
      new CustomEvent("go-to-cart", {
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
    .header {
      padding: 3rem 0;
      align-items: center;
      display: grid;
      grid-template-areas: "logo navigation icons";
      grid-template-columns: auto auto 1fr;
      column-gap: 2rem;
    }
    .header__logo {
      grid-area: logo;
    }
    .header__navigation {
      grid-area: navigation;
    }
    .header__icons {
      grid-area: icons;
      justify-self: end;
      padding-right: 2rem;
      cursor: pointer;
    }
    .header-icons__items-cart {
      margin-top: -10px;
      position: absolute;
      margin-left: 5px;
    }
    .header-logo__logo {
      border: 2px solid black;
      color: black;
      text-align: center;
      padding: 5px 30px;
      cursor: pointer;
      width: 60px;
    }
    .header-navigation__item {
      margin-right: 1rem;
    }
    .header-navigation {
      position: relative;
    }
    .header-navigation__item-title {
      padding: 1rem 0;
    }
    .header-navigation__content {
      border: 1px solid #d1d5db;
      margin-top: -1px;
      display: none;
      left: 0px;
      position: absolute;
      top: 100%;
      width: auto;
      background: #fff;
      z-index: 9999;
    }
    .header-navigation__trigger:hover .header-navigation__content {
      display: block;
    }
    .header-navigation-content__item {
      padding: 1rem 2rem;
      margin: 0;
      cursor: pointer;
    }
    .header-navigation-content__item::first-letter {
      text-transform:capitalize;
    }
    .header-navigation-content__item:hover {
      background: black;
      color: white;
    }
`;

  return (
    <>
      <style>{css}</style>
      <header className="header">
        <div className="header__logo header-logo">
          <div className="header-logo__logo" onClick={goHome}>
            T-SHOP
          </div>
        </div>
        <div className="header__navigation header-navigation">
          <div className="header-navigation">
            <div className="header-navigation__item header-navigation__trigger">
              <div className="header-navigation__item-title">Categories</div>

              <div className="header-navigation__content">
                {categoriesParsed.map((category: string, id: number) => (
                  <p
                    className="header-navigation-content__item"
                    key={id}
                    onClick={(e) => selectCategory(e, category)}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="header__icons header-icons" onClick={goToCart}>
          <svg
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M7 23a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm9-28h-3a1 1 0 0 0-1 .76L25.22 5H2a1 1 0 0 0-.76.34 1 1 0 0 0-.23.8l2 14A1 1 0 0 0 4 21h20a1 1 0 0 0 1-.86l2-13.95.78-3.19H30a1 1 0 0 0 0-2zm-6.87 18H4.87L3.15 7h21.7z" />
          </svg>
          <span className="header-icons__items-cart">{cartParsed.length}</span>
        </div>
      </header>
    </>
  );
}

App.propTypes = {
  categories: PropTypes.string.isRequired,
  cart: PropTypes.string.isRequired,
};

export default App;
