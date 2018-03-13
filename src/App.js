import React, { Component } from 'react';
import logo from './logo.svg';
import i2 from './i2.jpg';
import w from './w.jpg';
import m from './messi.jpg';
import m1 from './images.jpeg';
import a from './aa.jpg';
import i3 from './stp_demo1.jpg';
import './App.css';
import {Tab, Card, Container,Icon } from 'semantic-ui-react';
class App extends Component{
  render(){
    return(
      <div id='top'>
      <div className="ui large top fixed hidden menu" >
    <div className="ui container" >
      <a className="active item">Home</a>
      <a className="item">Work</a>
      <a className="item">Company</a>
      <a className="item">Careers</a>
      <div className="right menu">
        <div className="item">
          <a className="ui button">Log in</a>
        </div>
        <div className="item">
          <a className="ui primary button">Sign Up</a>
        </div>
      </div>
    </div>
  </div>

  <div id='background'>

      <div className="ui five column grid" id="s">
      <div className="column">

     <div className="ui card" id='firstmost'>
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>Association football, more commonly known as football or soccer, is a team sport</h3></div>
        </div>
        <div className="image">
          <img src={i3}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
    </div>
</div>



      <div className="two wide column" id='first'>
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!1</h3></div>
        </div>
        <div className="image">
          <img src={i2}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="type" />
          </div>
        </div>
      </div>
      </div>



      <div className="two wide column" id='second'>
      <div className="ui card" >
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!2</h3></div>
        </div>
        <div className="image">
          <img src={w}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="comment" />
          </div>
        </div>
      </div>
      </div>


      <div className= "two wide column">
      <div className="ui card" id='third'>
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!3</h3></div>
        </div>
        <div className="image">
          <img src={a}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="comment" />
          </div>
        </div>
      </div>
      </div>



        <div className=" two wide column" id="forth">
        <div className="ui card">
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!4</h3></div>
        </div>
        <div className="image">
          <img src={m1}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          </div>
        </div>
      </div>
      </div>





      <div className="ui card">
       <div className="content">
         <div className="right floated meta">2</div>
         <div><h3>'Ronaldo's From Another Galaxy!</h3></div>
       </div>
       <div className="image">
         <img src={m}alt={"image1"}/>
       </div>
       <div className="content">
         <span className="right floated">
         <i className="heart outline like icon"></i>
         17 likes
         </span>
         <i className="comment icon"></i>
         3 comments
       </div>

     </div>
    </div>


      <div id='second row'>


      <div className="ui five column grid" id='f'>
     <div id='new'>
      <div className="ui card" id='fifth'>
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!5</h3></div>
        </div>
        <div className="image">
          <img src={i2}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="comment" />
          </div>
        </div>
        </div>
        </div>



        <div id="e">
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">2</div>
          <div><h3>'Ronaldo's From Another Galaxy!6</h3></div>
        </div>
        <div className="image">
          <img src={a}alt={"image1"}/>
        </div>
        <div className="content">
          <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
          </span>
          <i className="comment icon"></i>
          3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          <i className="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>
      </div>
</div>







      </div>

    </div>

  </div>
    );
  }
}

export default App;
