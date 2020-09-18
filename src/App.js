import React, { useState } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from "./hoc/Layout/Layout"


function App() {
  const [show, setShow] = useState(true)

  setTimeout(() => {
    setShow(false)
  }, 5000 )

  return (
    <div>
      <Layout>
       {show? <BurgerBuilder /> :  null}
      </Layout>
    </div>
  );
}

export default App;
