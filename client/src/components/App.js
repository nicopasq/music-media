import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState('')

  useEffect(() =>{
    fetch("/home")
    .then(r => r.json)
    .then(data => setPage(data))
  })

  return (
    <div>
      <h1>{page.page}</h1>
    </div>
  )

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Switch>
  //         <Route path="/testing">
  //           <h1>Test Route</h1>
  //         </Route>
  //         <Route path="/">
  //           <h1>Page Count: {count}</h1>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;