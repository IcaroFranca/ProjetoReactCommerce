import computerImg from './assets/computer.png';
import cartImg from './assets/cart.svg';
import "./App.css";

function App() {
  return (
    <>
      <header className="rc-header-client">
        <nav className="rc-container">
          <h1>ReactCommerce</h1>
          <div className="rc-nav-bar-right">
            <div className="rc-menu-items-container">
              <div className="rc-menu-item">
                <img src={cartImg} alt="Carrinho de compras" />
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="product-details-section" className="rc-container">
          <div className="rc-card">
            <div className="rc-product-details-top rc-line-bottom">
              <img src={computerImg} alt="Computador" />
            </div>
            <div className="rc-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                deleniti tempore recusandae numquam consequatur animi
                exercitationem quidem voluptatem, ut aut itaque. Accusantium
                libero consectetur est facere, voluptatem eum excepturi vel
                tempora voluptatum error ab rem fugiat maxime ducimus debitis
                aperiam ad at eligendi natus molestias praesentium provident
                aspernatur. Placeat, voluptate?
              </p>
              <div className="rc-category-container">
                <div className="rc-category">Eletrônicos</div>
                <div className="rc-category">Computadores</div>
              </div>
            </div>
          </div>
          <div className="rc-btn-page-container">
            <div className="rc-btn rc-btn-blue rc-mt20">Comprar</div>
            <div className="rc-btn rc-btn-white">Início</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
