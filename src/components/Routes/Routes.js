import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Authentication from '../Authentication';
import ContactUs from '../ContactUs';
import Errors from '../Errors';
import Faqs from '../Faqs';
import Favorites from '../Favorites';
import Filters from '../Filters';
import ForgetPassword from '../ForgetPassword';
import Home from '../Home';
import Index from '../Index';
import Landing from '../Landing';
import Location from '../Location';
import Login from '../Login';
import Map from '../Map';
import MostPopular from '../MostPopular';
import Pages from '../Pages';
import Payment from '../Payment';
import Privacy from '../Privacy';
import Profile from '../Profile';
import Recipe from '../Recipe';
import Restaurnt from '../Restaurnt';
import SelectCountry from '../SelectCountry';
import SignUp from '../SignUp';
import Terms from '../Terms';
import Trending from '../Trending';
import Verification from '../Verification';
import NotPresent from "../NotPresent"
import Maintence from '../Maintence';
import ComingSoon from '../ComingSoon';
import Navigation from '../Navigation';
import Checkout from '../Checkout';
import Categories from '../Categories';
import Offers from '../Offers';
import Orders from '../Orders';
import CatRestaurnt from '../CatRestaurants';
import OffRestaurnt from '../OffRestraunt';
import SeeMoreRest from '../SeeMoreRest';
import SelectAddress from '../SelectAddress';
import SetCurrentLocation from '../SetCurrentLocation';
import InputAddress from '../InputAddress';
import MapTracking from '../MapTracking';




function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/landing" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgotpassword" component={ForgetPassword}/> 
          <Route path="/verification" component={Verification} />
          <Route path="/location" component={Location} />
          <Route path="/selectcountry" component={SelectCountry}  />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/authemtication" component={Authentication} />
          <Route path="/trending" component={Trending} />
          <Route path="/mostpopular" component={MostPopular} />
          <Route path="/restaurants" component={Restaurnt} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/map" component={Map} />
          <Route path="/payment" component={Payment} />
          <Route path="/profile" component={Profile} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/pages" component={Pages} />
          <Route path="/filters" component={Filters} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/erros" component={Errors} />
          <Route path="/notfound" component={NotPresent} />
          <Route path="/maintence" component={Maintence} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/navigationlink" component={Navigation} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/categories" component={Categories} />
          <Route path="/offers" component={Offers}  />
          <Route path="/orders" component={Orders} />
          <Route path="/category&restraunts" component={CatRestaurnt} />
          <Route path="/offer&restraunts" component={OffRestaurnt} />
          <Route path="/allrestraunt" component={SeeMoreRest} />
          <Route path="/restaurant" component={Restaurnt} />
          <Route path="/select-address" component={SelectAddress} />
          <Route path="/confirm-address" component={SetCurrentLocation} />
          <Route path="/input-address" component={InputAddress} />
          <Route path="/order-tracking" component={MapTracking} />
        </Switch> 
      </BrowserRouter>
    </div>
  )
}

export default Routes
