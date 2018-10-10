import React, {Component} from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {Provider, connect}   from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Img from 'react-image';
import thunk from 'redux-thunk';
const API = 'http://api.tvmaze.com/search/shows?q=';
const KeyNames = new Set(['name', 'language', 'genres', 'status','rating']);
const actionPending     = () => ({ type: 'DATA_USER', status: 'PENDING', payload: null, error: null });
const actionResolved    = payload => ({ type: 'DATA_USER', status: 'RESOLVED', payload, error: null });
const actionRejected    = error => ({ type: 'DATA_USER', status: 'REJECTED', payload: null, error });
let page = '';

function reducer(state = {arr:[]}, action){
    if (state === undefined){
        return page;
    }

    else if (action.type === 'DATA_USER'){
        // console.log(action.data);
        return {...state , arr:action.payload};
    }
    return state;
}

function actionTable(inputValue = 'girls'){
    return async (dispatch) => {
        dispatch(actionPending());
        try{
            dispatch(actionResolved(await fetch(API+inputValue)
                .then((response) => response.json())));
        }
        catch (e) {
            dispatch(actionRejected(e));
        }
    }; 
}

function action(sortedArr){
  return async (dispatch) => {
      dispatch(actionResolved(sortedArr))
  }; 
}
// class HomeApp extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             news: [],
//             isLoading: false,
//             error: null,
//         };
//     }

//     componentDidMount() {
//         this.setState({ isLoading: true });

//         fetch(API)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Something went wrong ...');
//                 }
//             })
//             .then(data => this.setState({ news: data, isLoading: false }))
//             .catch(error => this.setState({ error, isLoading: false }));
//     }

//     render() {
//         const { news, isLoading, error } = this.state;

//         if (error) {
//             return <p>{error.message}</p>;
//         }

//         if (isLoading) {
//             return <p>Loading ...</p>;
//         }

//         return (
//             <MakeTable data = {news}/> 
//         );
//     }
// }



class Login extends Component {

    addUser() {

        
        this.login.value = '';
        this.mail.value = '';
        this.password.value = '';
    }

  

    render() {
        return (
   
            <div className=" App-header App SectionApp">
                <h1>Login please!</h1><br /><br />
                <input className="InputSpace" placeholder='Type your mail'  type="text" ref={(input) => { this.mail = input; }} /><br /><br />
                <input className="InputSpace" placeholder='Type your password'  type="text" ref={(input) => { this.password = input; }} /><br /><br />
                <button >Add user</button><br /><br />
                <Link to='/' className='WhiteLink'>Home</Link>&nbsp;&nbsp;
                <Link to='/detail' className='WhiteLink'>Detail</Link>

            </div>
    
        );
    }
}

class Home extends Component {

    render (){
        return (
            <div className=" App-header App SectionApp">
                <h1>Home Page</h1><br /><br />
                <UserSearch /><br /><br />
                <MakeTable /><br /><br />
                <Link to='/login' className='WhiteLink'>User info</Link>
            </div>
        );
    }
}

class Detail extends Component {

    render (){
        return (
            <div className=" App-header App SectionApp">
                <h1>User info</h1><br /><br />
                <section className=''>
                    <div className='forBlocks block1'>
                        <Img src="https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png" />
                    </div>
                    <div className='forBlocks block2'>
                        <span className='forSpan'>Name</span><br /><br />
                        <span className='forSpan'>Language</span><br /><br />
                        <span className='forSpan'>Genres</span><br /><br />
                        <span className='forSpan'>Status</span><br /><br />
                        <span className='forSpan'>Reiting</span><br /><br />
                    </div>
                </section>
                <Link to='/' className='WhiteLink'>Home</Link>
            </div>
        );
    }
}

class ErrPage extends Component {

    render (){
        return (
            <div className=" App-header App SectionApp">
                <h1>404 Page not found!</h1>
                <Link to='/' className='WhiteLink'>Home</Link>
            </div>
        );
    }
}

class MakeTd extends Component{

    render(){
        return(
            <td onClick={() => this.props}>
                {
                    this.props.name
                }
            </td>
        );
    }
}   

class MakeTr extends Component{
    constructor(props){
        super(props);
        props = this.props.columns;

    }

    createNewArr(){
        let arr = [];
        for(let key in this.props.columns){
            if(KeyNames.has(key)){
                if(key === 'rating'){
                    arr.push(this.props.columns['rating']['average'] || '0');
                } else{
                    arr.push(this.props.columns[key]);
                }
            }
        }
        return arr;
    }

    newValueTr(){
        return this.createNewArr().map(el=> <MakeTd name = {el} />);
    }
    


    render()
    
    {
        return(
            <tr>
                { this.newValueTr() }
            </tr>
            
        );
    }
} 

class MakeTable extends Component{
    componentWillMount(){
        this.props.actionTable();
        // console.log(this.props);

    }
    chooseCol(){
        if (this.props.page !== null && this.props.page !== false) {
            return this.props.page.map((row, i)=> <MakeTr key={i} columns = {row.show } index ={i} />);
        }
    }

    createTh(){
        return Array.from(KeyNames).map((value, i, arr)=> <th onClick={() =>{
            if(value === 'name'){
                console.log('name');
                console.log(arr);
                this.props.page.sort(function (a, b) {
                    if (a.show.name > b.show.name) {
                        return 1;
                    }
                    if (a.show.name < b.show.name) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
            } 
            this.props.action(this.props.page); // запись отсортированного массива в стор(осталось перезапустить table с отсортированным массивом)
            if(value === 'rating'){
                console.log('rating');
            }
        }} key = {i}>{value.toUpperCase()}</th>);
    }

    render()
    {
        return(
            <table className='infoBlock'>
                <tbody>
                    <tr>
                        {
                            this.createTh() 
                        }
                    </tr>
                    {
                      
                        this.chooseCol()
                    }
                </tbody>
            </table>
        );
    }
}

class UserSearch extends Component{

    render(){
        return(
            <div>
                <input ref={c => this.input = c} />
                <button onClick={() => this.props.actionTable(this.input.value)}>Search</button>
            </div>
        );
    }
} 

var store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));

const mapStateToProps = function(store) {
    return {
        page: store.arr
    };
};

MakeTable = connect(mapStateToProps,{actionTable, action})(MakeTable);
UserSearch = connect(mapStateToProps,{actionTable})(UserSearch);
// Home = connect(mapStateToProps)(Home);
// Login = connect(mapStateToProps)(Login);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={createHistory()} >
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/detail' component={Detail}/>
                            <Route component={ErrPage}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
