import Offer from "./components/Offer.js";

function App() {
  return (
    <section>
      <h2 className="section__header">Что Вам необходимо?</h2>
      <div className="offers__wrapper">
        <Offer title="Первый блок" imageName="pencil" end=""/>
        <Offer title="Второй блок" imageName="balloon" end="?"/>
        <Offer title="Третий блок" imageName="flag" end="!"/>
      </div>
    </section>
  );
}

export default App;
