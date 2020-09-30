import React, {/* useState */} from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from "./hoc/Layout/Layout"


function App() {
  // const [show, setShow] = useState(true)
  // const [timer, setTimer] = useState(0)

  // setTimeout(() => {
  //   setShow(false)
  // }, 5000 )

  // setInterval(() => {
  //   setTimer(timer+1)
  // }, 1000)

  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
