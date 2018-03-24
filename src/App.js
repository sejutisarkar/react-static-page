import React, { Component } from 'react';
import {segment} from 'semantic-ui-react';
import a1 from './a1.jpg';
import a4 from './a4.jpg';
import a2 from './a2.png';
import a3 from './a3.jpeg';
import a5 from './a5.jpg';
import a7 from './a7.jpg';
import a8 from './a8.jpg';
import a9 from './a9.jpg';
import a10 from './a10.jpg';
import a11 from './a11.jpg';
export default class App extends Component{
  render(){
    return(
      <div>
<div class="ui large top fixed hidden menu">
  <div class="ui container">
    <a class="active item">Home</a>
    <a class="item">Latest</a>
    <a class="item">Full Stack</a>
    <a class="item">Careers</a>
    <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>

<div class="pusher">
  <div class="ui inverted vertical masthead center aligned segment">

    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
        <a class="item">Latest</a>
        <a class="item">Full Stack</a>
        <a class="item">Careers</a>
        <div class="right item">
          <a class="ui inverted button">Log in</a>
          <a class="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <h1 class="ui inverted header">
        Imagine-a-Company
      </h1>
      <h2>ALways get yourself updated</h2>
      <button class="huge ui button">
      <div class="ui animated button" tabindex="0">
    <div class="visible content">Get Started</div>
    <div class="hidden content">
      <i class="right arrow icon"></i>
    </div>
  </div></button>
    </div>

  </div>

  <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
      <h3 class="ui header">EMERGING BIG DATA TRENDS FOR 2018</h3>
          <p>Big data market will be worth US$46.34 billion by end of 2018. This clearly indicates that big data is in a constant phase of growth and evolution.IDC estimates that the global revenue from big data will reach US$203 billion by 2020 and there will be close to 440,000 big data related job roles in the US alone with only 300,000 skilled professionals to fill them.</p>
          <h3 class="ui header">Healthcare Data Analytics Market Analysis</h3>
          <p>Healthcare Data Analytics Market report evaluates key factors that affected market growth and with the help of previous figures this report elaborates current scenario and forecast of Healthcare Data Analytics industry.</p>
        </div>
        <div class="six wide right floated column">
          <img src={a1}class="ui large bordered rounded image" />
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
        <div class="ui vertical animated button" id="b2" tabindex="0">
  <div class="visible content">Check Them Out</div>
  <div class="hidden content">
    <i class="right arrow icon"></i>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>


  <div class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column" id ="b">

        <div class="statistic">
             <div class="value">
               <i class="plane icon"></i> 5
             </div>
             <div class="label">
               Flights
             </div>
        </div>
<br />
        <div class="statistic">
            <div class="text value">
              Three<br/>
              Thousand
            </div>
            <div class="label">
              Signups
            </div>
          </div>
        </div>
  <div class="column">
</div>
<div class="ui items" id ="d">
 <div class="item">
   <a class="ui tiny image">
     <img src={a2}/>
   </a>
   <div class="content">
     <a class="header">Mark Zuckerberg</a>
     <div class="description">
       <p>Mark Zuckerberg has regrets: 'I'm really sorry that this happened</p>
     </div>
   </div>
 </div>
 <div class="item">
   <a class="ui tiny image">
     <img src={a7} />
   </a>
   <div class="content">
     <a class="header">Chrome</a>
     <div class="description">
       <p>Google Chrome’s next update will finally block autoplay videos that have sound
</p>
     </div>
   </div>
 </div>
 <div class="item">
   <a class="ui tiny image">
     <img src={a8} />
   </a>
   <div class="content">
     <a class="header">BlackBerry update</a>
     <div class="description">
       <p>BlackBerry, Jaguar partner to develop automotive technology
</p>
     </div>
   </div>
 </div>
        </div>
      </div>
    </div>
  </div>


  <div  class="ui vertical stripe segment">
    <div class="ui text container">
      <h3 class="ui header">Latest News</h3>

      <div class="ui four column grid">
      <div class="column">
        <a class="ui fluid card">
          <div class="image">
            <img src={a3}/>
          </div>
          <div class="content">
            <a>CBI arrests ONGC Deputy General Manager over corruption</a>
          </div>
          <div class="extra content">
       <span class="left floated like">
         <i class="like icon"></i>
         Like
         </span>
     </div>
        </a>
      </div>
    <div class="column">
      <a class="ui fluid card">
        <div class="image">
          <img src={a9}/>
        </div>
        <div class="content">
          <a>Reliance Mutual Fund to suspend subscriptions in cap fund. </a>
        </div>
        <div class="extra content">
     <span class="left floated like">
       <i class="like icon"></i>
       Like
       </span>
   </div>
      </a>
    </div>
    <div class="column">
      <a class="ui fluid card">
        <div class="image">
          <img src={a10}/>
        </div>
        <div class="content">
          <a>Leaked:Cambridge Analytic blueprint for the Trump victory</a>
        </div>
        <div class="extra content">
     <span class="left floated like">
       <i class="like icon"></i>
       Like
       </span>
   </div>
      </a>
    </div>
    <div class="column">
      <a class="ui fluid card">
        <div class="image">
          <img src={a11}/>
        </div>
        <div class="content">
          <a>Seth Rich’s parents are taking their fights</a>
        </div>
        <div class="extra content">
     <span class="left floated like">
       <i class="like icon"></i>
       Like
       </span>
   </div>
      </a>
    </div>
  </div>


      <h4 class="ui horizontal header divider">
        <a href="#">Latest Deals</a>
      </h4>

      <div class="ui two column grid">
        <div class="column">
          <a class="ui fluid image">
            <a class="ui right corner label">
              <i class="heart icon"></i>
            </a>
             <a class="ui red ribbon label">Overview</a>
            <img src={a4} />
            <a class="header">
            The Complete Anroid Course
            </a>

     </a>

        </div>

        <div class="column">
          <div class="ui fluid image">
            <a class="ui right corner label">
              <i class="heart icon"></i>
            </a>
             <a class="ui red ribbon label">Overview</a>
            <img src={a5} />
            <a class="header">
            The AWS Architecture
            </a>
          </div>
        </div>

      </div>
<br />

<div class="ui animated fade button" id="b3" tabindex="0">
<div class="visible content" >Shop Now</div>
<div class="hidden content">
  <i class="shop icon"></i>
</div>
</div>
    </div>
</div>

  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Sitemap</a>
            <a href="#" class="item">Events</a>
            <a href="#" class="item">Religious Ceremonies</a>
            <a href="#" class="item">Advertise</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Pre-Order</a>
            <a href="#" class="item">FAQ</a>
            <a href="#" class="item">How To Access</a>
            <a href="#" class="item">Jobs</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">Visit us :</h4>
          <button class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </button>
            <button class="ui circular twitter icon button">
              <i class="twitter icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="linkedin icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="instagram icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="mail icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="youtube icon"></i>
            </button>
            <button class="ui circular google plus icon button">
              <i class="google plus icon"></i>
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);}}
