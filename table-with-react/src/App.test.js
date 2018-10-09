import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




// const myComponent = () => <Img src="www.example.com/foo.jpg" />

// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import createHistory from "history/createBrowserHistory";
// import {Router, Route, Link, Switch} from 'react-router-dom';
// import {createStore, combineReducers} from 'redux';
// import {Provider, connect}   from 'react-redux';
// import Img from 'react-image';

// const thValue = new Set(["name", "language", "genres", "status"])
// const  page = 
// [{'score':17.354893,'show':{'id':139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":94,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1538265422,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}},{"score":13.221979,"show":{"id":32087,"url":"http://www.tvmaze.com/shows/32087/chicken-girls","name":"Chicken Girls","type":"Scripted","language":"English","genres":[],"status":"Running","runtime":16,"premiered":"2017-09-05","officialSite":"https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy","schedule":{"time":"18:00","days":["Tuesday"]},"rating":{"average":null},"weight":93,"network":null,"webChannel":{"id":274,"name":"Brat","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/137/344365.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/137/344365.jpg"},"summary":"<p>Rhyme and her friends — known by their 'ship name, \"The Chicken Girls\" — have been dancing together forever. But this year, everything's changing...</p>","updated":1538527728,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32087"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1518615"}}}},{"score":13.159654,"show":{"id":23542,"url":"http://www.tvmaze.com/shows/23542/good-girls","name":"Good Girls","type":"Scripted","language":"English","genres":["Drama","Comedy","Crime"],"status":"Running","runtime":60,"premiered":"2018-02-26","officialSite":"https://www.nbc.com/good-girls?nbc=1","schedule":{"time":"22:00","days":["Monday"]},"rating":{"average":7},"weight":92,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":328577,"imdb":"tt6474378"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/141/354343.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/141/354343.jpg"},"summary":"<p><b>Good Girls</b> follows three \"good girl\" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>","updated":1532345475,"_links":{"self":{"href":"http://api.tvmaze.com/shows/23542"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1425058"}}}},{"score":13.016005,"show":{"id":525,"url":"http://www.tvmaze.com/shows/525/gilmore-girls","name":"Gilmore Girls","type":"Scripted","language":"English","genres":["Drama","Comedy","Romance"],"status":"Ended","runtime":60,"premiered":"2000-10-05","officialSite":null,"schedule":{"time":"21:00","days":["Tuesday"]},"rating":{"average":8.6},"weight":88,"network":{"id":5,"name":"The CW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":3683,"thetvdb":76568,"imdb":"tt0238784"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg"},"summary":"<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>","updated":1538645969,"_links":{"self":{"href":"http://api.tvmaze.com/shows/525"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/47639"}}}},{"score":12.90239,"show":{"id":6771,"url":"http://www.tvmaze.com/shows/6771/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Comedy","Action","Science-Fiction"],"status":"Running","runtime":15,"premiered":"2016-04-04","officialSite":"https://www.cartoonnetwork.com/video/powerpuff-girls/index.html","schedule":{"time":"17:30","days":["Sunday"]},"rating":{"average":null},"weight":87,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":307473,"imdb":"tt4718304"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"},"summary":"<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>","updated":1537942865,"_links":{"self":{"href":"http://api.tvmaze.com/shows/6771"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1518399"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1536459"}}}},{"score":12.435844,"show":{"id":27894,"url":"http://www.tvmaze.com/shows/27894/three-girls","name":"Three Girls","type":"Scripted","language":"English","genres":["Drama"],"status":"Ended","runtime":60,"premiered":"2017-05-16","officialSite":"http://www.bbc.co.uk/programmes/b08rgd5n","schedule":{"time":"21:00","days":["Tuesday","Wednesday","Thursday"]},"rating":{"average":9.5},"weight":58,"network":{"id":12,"name":"BBC One","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":327999,"imdb":"tt6835252"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/138/347202.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/138/347202.jpg"},"summary":"<p><b>Three Girls</b> tells the true story of three of the children who were victims in the 2012 grooming and sex trafficking case in Rochdale.</p><p>Holly is new to Rochdale and keen to make friends and fit in. She finds herself drawn into a world she cannot escape, despite her pleas for help. It's a world that is all too familiar to sexual health worker Sara, who has been recording and reporting cases of child abuse for years.</p>","updated":1513509678,"_links":{"self":{"href":"http://api.tvmaze.com/shows/27894"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1164038"}}}},{"score":12.169812,"show":{"id":32369,"url":"http://www.tvmaze.com/shows/32369/the-nice-girls","name":"The Nice Girls","type":"Scripted","language":"English","genres":["Drama","Action","Crime"],"status":"In Development","runtime":60,"premiered":null,"officialSite":null,"schedule":{"time":"","days":[]},"rating":{"average":null},"weight":32,"network":{"id":4,"name":"FOX","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":null,"summary":"<p><strong>The Nice Girls</strong> is a contemporary female take on the Joel Silver-produced 2016 feature film The Nice Guys.</p>","updated":1506676116,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32369"}}}},{"score":11.973952,"show":{"id":722,"url":"http://www.tvmaze.com/shows/722/the-golden-girls","name":"The Golden Girls","type":"Scripted","language":"English","genres":["Drama","Comedy"],"status":"Ended","runtime":30,"premiered":"1985-09-14","officialSite":null,"schedule":{"time":"21:00","days":["Saturday"]},"rating":{"average":8.2},"weight":79,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":5820,"thetvdb":71292,"imdb":"tt0088526"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"},"summary":"<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>","updated":1525015596,"_links":{"self":{"href":"http://api.tvmaze.com/shows/722"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/64040"}}}},{"score":11.697683,"show":{"id":35096,"url":"http://www.tvmaze.com/shows/35096/girls-incarcerated","name":"Girls Incarcerated","type":"Documentary","language":"English","genres":["Crime"],"status":"To Be Determined","runtime":45,"premiered":"2018-03-02","officialSite":"https://www.netflix.com/title/80185178","schedule":{"time":"","days":["Friday"]},"rating":{"average":null},"weight":0,"network":null,"webChannel":{"id":1,"name":"Netflix","country":null},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/147/368834.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/147/368834.jpg"},"summary":"<p>At Madison Juvenile Correctional Facility in Indiana, teen girls struggle with conflict and heartbreak as they try to turn their lives around. Fights, friendships, dating, rules. Teenage life is full of drama. But behind bars, the stakes are so much higher.</p>","updated":1520624514,"_links":{"self":{"href":"http://api.tvmaze.com/shows/35096"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1419344"}}}},{"score":11.311891,"show":{"id":1073,"url":"http://www.tvmaze.com/shows/1073/bomb-girls","name":"Bomb Girls","type":"Scripted","language":"English","genres":["Drama","Romance","War"],"status":"Ended","runtime":60,"premiered":"2012-01-04","officialSite":null,"schedule":{"time":"20:00","days":["Monday"]},"rating":{"average":8.5},"weight":0,"network":{"id":67,"name":"Global","country":{"name":"Canada","code":"CA","timezone":"America/Halifax"}},"webChannel":null,"externals":{"tvrage":30600,"thetvdb":254378,"imdb":"tt1955311"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/7/17549.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/7/17549.jpg"},"summary":"<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>","updated":1483430381,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1073"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/108024"}}}}]



// function reducer(state, action){
//     if (state === undefined){
//         return page;
//     }

//     else if (action.type === 'DATA_USER'){
//         console.log(action.data);
//         return action.data.user;
//     }
//     return state;
// }

// class Td extends Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return(
//       <td>
//         {
//           this.props.name
//         }
//       </td>
//     )
//   }
// }   

// class Tr extends Component{
//   constructor(props){
//     super(props)
//     props = this.props.columns

//   }

//   getArr(){
//     let arr = []
//     for(let key in this.props.columns){
//       if(thValue.has(key)){

//         arr.push(this.props.columns[key])
//       }
//     }
//     return arr
//   }

//   setTrValue(){
//     return this.getArr().map(el=> <Td name = {el} ></Td>)
//   }


//   render()
  
//   {
//     return(
//      <tr>{
//        this.setTrValue()
//         // this.getArr().map((el, i)=> <Td name = {el} ></Td>)
//      }
//      </tr>
        
//     )
//   }
// }    

// class Table extends Component{

//   makeColumns(){
//     return this.props.data.map((row, i)=> <Tr key={i} columns = {row.show } index ={i}></Tr>)
//     // return page.map((row, i)=> <Tr key={i} columns = {row.show } index ={i}></Tr>)

//   }

//   render()
//   {
//     return(
//       <table>
//         <tbody>
//         {
//          this.makeColumns() 
//           // data.map((row, i)=> <Tr key={i} columns = {row.show } index ={i}></Tr>)
//           }
//         </tbody>
//       </table>
//     )
//   }
// }



// class Login extends Component {

//     addUser() {

        
//         this.login.value = '';
//         this.mail.value = '';
//         this.password.value = '';
//     }

  

//     render() {
//         console.log(this.props.login);
//         return (
   
//             <div className=" App-header App SectionApp">
//                 <h1>Login please!</h1>
//                 <input className="InputSpace" placeholder='Type your mail'  type="text" ref={(input) => { this.mail = input; }} /><br /><br />
//                 <input className="InputSpace" placeholder='Type your password'  type="text" ref={(input) => { this.password = input; }} /><br /><br />
//                 <button >Add user</button><br /><br />
//                 <Link to='/' className='WhiteLink'>Home</Link>&nbsp;&nbsp;
//                 <Link to='/detail' className='WhiteLink'>Detail</Link>

//             </div>
    
//         );
//     }
// }

// class Home extends Component {

//   render (){
//       return (
//           <div className=" App-header App SectionApp">
//             <h1>Home Page</h1>
//             <Table />
//             <Link to='/login' className='WhiteLink'>User info</Link>
//           </div>
//       )
//   }
// }
// // const myComponent = () => <Img src="www.example.com/foo.jpg" />
// class Detail extends Component {

//   render (){
//       return (
//           <div className=" App-header App SectionApp">
//             <h1>User info</h1><br /><br />
//             <section className=''>
//               <div className='forBlocks block1'>
//                 <Img src="https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png" />
//                 </div>
//               <div className='forBlocks block2'>
//                 <span className='forSpan'>Name</span><br /><br />
//                 <span className='forSpan'>Language</span><br /><br />
//                 <span className='forSpan'>Genres</span><br /><br />
//                 <span className='forSpan'>Status</span><br /><br />
//                 <span className='forSpan'>Reiting</span><br /><br />
//               </div>
//             </section>
//             <Link to='/' className='WhiteLink'>Home</Link>
//           </div>
//       )
//   }
// }

// class ErrPage extends Component {

//   render (){
//       return (
//           <div className=" App-header App SectionApp">
//             <h1>404 Page not found!</h1>
//             <Link to='/' className='WhiteLink'>Home</Link>
//           </div>
//       )
//   }
// }

// var store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



// const mapStateToProps = function(store) {
//     return {
//         page: store.page,
//     };
// };

// Home = connect(mapStateToProps)(Home)
// Login = connect(mapStateToProps)(Login)

// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//               <Router history={createHistory()} >
//                 <div>
//                   <Switch>
//                     <Route exact path='/' component={Home}/>
//                     <Route path='/login' component={Login}/>
//                     <Route path='/detail' component={Detail}/>
//                     <Route component={ErrPage}/>
//                   </Switch>
//                 </div>
//               </Router>
//             </Provider>
//         );
//     }
// }

// export default App;





// import React, { Component } from 'react';
// import './App.css';
// const thValue = new Set(['name', 'language', 'genres', 'status'])
// const  data = 
// [{'score':17.354893,'show':{'id':139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":94,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1538265422,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}},{"score":13.221979,"show":{"id":32087,"url":"http://www.tvmaze.com/shows/32087/chicken-girls","name":"Chicken Girls","type":"Scripted","language":"English","genres":[],"status":"Running","runtime":16,"premiered":"2017-09-05","officialSite":"https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy","schedule":{"time":"18:00","days":["Tuesday"]},"rating":{"average":null},"weight":93,"network":null,"webChannel":{"id":274,"name":"Brat","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/137/344365.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/137/344365.jpg"},"summary":"<p>Rhyme and her friends — known by their 'ship name, \"The Chicken Girls\" — have been dancing together forever. But this year, everything's changing...</p>","updated":1538527728,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32087"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1518615"}}}},{"score":13.159654,"show":{"id":23542,"url":"http://www.tvmaze.com/shows/23542/good-girls","name":"Good Girls","type":"Scripted","language":"English","genres":["Drama","Comedy","Crime"],"status":"Running","runtime":60,"premiered":"2018-02-26","officialSite":"https://www.nbc.com/good-girls?nbc=1","schedule":{"time":"22:00","days":["Monday"]},"rating":{"average":7},"weight":92,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":328577,"imdb":"tt6474378"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/141/354343.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/141/354343.jpg"},"summary":"<p><b>Good Girls</b> follows three \"good girl\" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>","updated":1532345475,"_links":{"self":{"href":"http://api.tvmaze.com/shows/23542"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1425058"}}}},{"score":13.016005,"show":{"id":525,"url":"http://www.tvmaze.com/shows/525/gilmore-girls","name":"Gilmore Girls","type":"Scripted","language":"English","genres":["Drama","Comedy","Romance"],"status":"Ended","runtime":60,"premiered":"2000-10-05","officialSite":null,"schedule":{"time":"21:00","days":["Tuesday"]},"rating":{"average":8.6},"weight":88,"network":{"id":5,"name":"The CW","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":3683,"thetvdb":76568,"imdb":"tt0238784"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg"},"summary":"<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>","updated":1538645969,"_links":{"self":{"href":"http://api.tvmaze.com/shows/525"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/47639"}}}},{"score":12.90239,"show":{"id":6771,"url":"http://www.tvmaze.com/shows/6771/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Comedy","Action","Science-Fiction"],"status":"Running","runtime":15,"premiered":"2016-04-04","officialSite":"https://www.cartoonnetwork.com/video/powerpuff-girls/index.html","schedule":{"time":"17:30","days":["Sunday"]},"rating":{"average":null},"weight":87,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":307473,"imdb":"tt4718304"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"},"summary":"<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>","updated":1537942865,"_links":{"self":{"href":"http://api.tvmaze.com/shows/6771"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1518399"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1536459"}}}},{"score":12.435844,"show":{"id":27894,"url":"http://www.tvmaze.com/shows/27894/three-girls","name":"Three Girls","type":"Scripted","language":"English","genres":["Drama"],"status":"Ended","runtime":60,"premiered":"2017-05-16","officialSite":"http://www.bbc.co.uk/programmes/b08rgd5n","schedule":{"time":"21:00","days":["Tuesday","Wednesday","Thursday"]},"rating":{"average":9.5},"weight":58,"network":{"id":12,"name":"BBC One","country":{"name":"United Kingdom","code":"GB","timezone":"Europe/London"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":327999,"imdb":"tt6835252"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/138/347202.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/138/347202.jpg"},"summary":"<p><b>Three Girls</b> tells the true story of three of the children who were victims in the 2012 grooming and sex trafficking case in Rochdale.</p><p>Holly is new to Rochdale and keen to make friends and fit in. She finds herself drawn into a world she cannot escape, despite her pleas for help. It's a world that is all too familiar to sexual health worker Sara, who has been recording and reporting cases of child abuse for years.</p>","updated":1513509678,"_links":{"self":{"href":"http://api.tvmaze.com/shows/27894"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1164038"}}}},{"score":12.169812,"show":{"id":32369,"url":"http://www.tvmaze.com/shows/32369/the-nice-girls","name":"The Nice Girls","type":"Scripted","language":"English","genres":["Drama","Action","Crime"],"status":"In Development","runtime":60,"premiered":null,"officialSite":null,"schedule":{"time":"","days":[]},"rating":{"average":null},"weight":32,"network":{"id":4,"name":"FOX","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":null,"summary":"<p><strong>The Nice Girls</strong> is a contemporary female take on the Joel Silver-produced 2016 feature film The Nice Guys.</p>","updated":1506676116,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32369"}}}},{"score":11.973952,"show":{"id":722,"url":"http://www.tvmaze.com/shows/722/the-golden-girls","name":"The Golden Girls","type":"Scripted","language":"English","genres":["Drama","Comedy"],"status":"Ended","runtime":30,"premiered":"1985-09-14","officialSite":null,"schedule":{"time":"21:00","days":["Saturday"]},"rating":{"average":8.2},"weight":79,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":5820,"thetvdb":71292,"imdb":"tt0088526"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"},"summary":"<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>","updated":1525015596,"_links":{"self":{"href":"http://api.tvmaze.com/shows/722"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/64040"}}}},{"score":11.697683,"show":{"id":35096,"url":"http://www.tvmaze.com/shows/35096/girls-incarcerated","name":"Girls Incarcerated","type":"Documentary","language":"English","genres":["Crime"],"status":"To Be Determined","runtime":45,"premiered":"2018-03-02","officialSite":"https://www.netflix.com/title/80185178","schedule":{"time":"","days":["Friday"]},"rating":{"average":null},"weight":0,"network":null,"webChannel":{"id":1,"name":"Netflix","country":null},"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/147/368834.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/147/368834.jpg"},"summary":"<p>At Madison Juvenile Correctional Facility in Indiana, teen girls struggle with conflict and heartbreak as they try to turn their lives around. Fights, friendships, dating, rules. Teenage life is full of drama. But behind bars, the stakes are so much higher.</p>","updated":1520624514,"_links":{"self":{"href":"http://api.tvmaze.com/shows/35096"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1419344"}}}},{"score":11.311891,"show":{"id":1073,"url":"http://www.tvmaze.com/shows/1073/bomb-girls","name":"Bomb Girls","type":"Scripted","language":"English","genres":["Drama","Romance","War"],"status":"Ended","runtime":60,"premiered":"2012-01-04","officialSite":null,"schedule":{"time":"20:00","days":["Monday"]},"rating":{"average":8.5},"weight":0,"network":{"id":67,"name":"Global","country":{"name":"Canada","code":"CA","timezone":"America/Halifax"}},"webChannel":null,"externals":{"tvrage":30600,"thetvdb":254378,"imdb":"tt1955311"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/7/17549.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/7/17549.jpg"},"summary":"<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>","updated":1483430381,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1073"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/108024"}}}}]


// class App extends Component{
//     render() {
//     var tableTemplate;

//     function makeColumns(rowObj) {
//       let tds = []
//       for(let key in rowObj){
//         if(thValue.has(key)){
//           let value = rowObj[key];

//           tds.push(<td>{value}</td>)
//         }
//       }
//       return tds
//     }

//     tableTemplate = data.map(function(row, i) {
//       return <tr key={i}>{makeColumns(row.show)}</tr>
//     });

//     return (
//       <table>
//         <tbody>
//           {tableTemplate}
//         </tbody>
//       </table>
//     )
//   }
// }

// export default App


