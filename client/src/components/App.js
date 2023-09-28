import { Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/'>
          <Header/>
          <h1>Login Page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route path = '/somePage'>
          <h1>This is somePage!!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;