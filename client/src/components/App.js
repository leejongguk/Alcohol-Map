
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import MapPage from "./views/MapPage/MapPage.js";
function App() {
  // console.log(firebaseInit);
  return (
    <BrowserRouter>
    <Suspense fallback={(<div>Loading...</div>)}>
      {/* <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}> */}
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/map" component={MapPage} />
        </Switch>
      </div>
    </Suspense>
    </BrowserRouter>
  );
}


export default App;
