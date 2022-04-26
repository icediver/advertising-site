import Filters from "../filters/Filters";
import Results from "../results/Results";
import Popup from "../popup/popup";


export const Main = () => {
  
  return  (
    <>
    <main>
      <section className="onlineshop-app">
          <h1 className="visually-hidden">Главная</h1>
          <div className="onlineshop-app__blueline"></div>
          <div className="onlineshop-app__wrapper">
            <Filters/>
            <Results/>
          </div>
      </section>

    </main>
    <Popup/>
    </>
    
  ) 
}

export default Main;