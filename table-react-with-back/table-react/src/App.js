import React, {Component} from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {Provider, connect}   from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Img from 'react-image';
import thunk from 'redux-thunk';
import { GraphQLClient } from 'graphql-request';
import { actionPending, actionResolved, actionRejected, API, KeyNames, ADD_USER, DATA_USER } from 'constants/NewEvent.js';
const gql = new GraphQLClient('http://localhost:4000/graphql', { headers: {} });
let page ;

function reducer(state = {arr:[]}, action){
    switch (action.type) {
    case DATA_USER: 
        return {...state , arr:action.payload};
    
    case ADD_USER:
        return action.data.user;
    
    default:
        return state;
    }
}

// function loginReducer(state, action){

// }

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
        dispatch(actionResolved(sortedArr));
    }; 
}




class Login extends Component {

    loginUser(){

        gql.request(
            `query getUser ($login: String!, $password: String!) {
                user (login: $login, password: $password) {
                login
                password
                }
                
            }`,
            {  
                login: this.login.value,
                password: this.password.value}
        )
            .then(data => {
                console.log(data.user);
                return store.dispatch({type: 'ADD_USER', data: {user:data.getUser}});
            });
        // console.log();
        this.login.value = '';
        this.password.value = '';
    }
    render() {
        return (
   
            <div className=" App-header App SectionApp">
                <h1>Login please!</h1><br /><br />
                <input className="InputSpace" placeholder='Type your login'  type="text" ref={(input) => { this.login = input; }} /><br /><br />
                <input className="InputSpace" placeholder='Type your password' type="password" name="password"  ref={(input) => { this.password = input; }} /><br /><br />
                <button onClick={this.loginUser.bind(this)}>Login user</button><br /><br />
                <Link to='/' className='WhiteLink'>Home</Link>&nbsp;&nbsp;
                <Link to='/registration' className='WhiteLink'>Registration</Link>
            </div>
    
        );
    }
}

class Registration extends Component {

    addUser() {

        gql.request(
            `mutation createUser($login: String!, $mail:String!, $password: String!, 
                $firstName: String!, $lastName: String!, 
                $dateOfBirth: String!, $phoneNumber: String!) {
                createUser(login: $login, mail: $mail, password: $password, 
                    firstName: $firstName, lastName: $lastName, 
                    dateOfBirth: $dateOfBirth, phoneNumber: $phoneNumber) {
                        login
                        mail
                        password
                         firstName
                         lastName
                         phoneNumber
                         dateOfBirth
                }
            }`,
            {login: this.login.value,
                mail: this.mail.value,
                password: this.password.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                dateOfBirth: this.dateOfBirth.value,
                phoneNumber: this.phoneNumber.value}
        )
            .then(data => store.dispatch({type: 'ADD_USER', data: {user:data.createUser}}));

        this.login.value = '';
        this.mail.value = '';
        this.password.value = '';
        this.firstName.value = '';
        this.lastName.value = '';
        this.dateOfBirth.value = '';
        this.phoneNumber.value = '';
    }

            

    render() {
        return (

            <div className=" App-header App SectionApp">
                <h1>Create User</h1><br /><br />
                <input className="InputSpace" placeholder='Type your login'  type="text" ref={(input) => { this.login = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your mail'  type="text" ref={(input) => { this.mail = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your firstName'  type="text" ref={(input) => { this.firstName = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your lastName'  type="text" ref={(input) => { this.lastName = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your password'  type="text" ref={(input) => { this.password = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your dateOfBirth'  type="text" ref={(input) => { this.dateOfBirth = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your phoneNumber'  type="text" ref={(input) => { this.phoneNumber = input }} /><br /><br />
                <button onClick={this.addUser.bind(this)}>Add user</button><br /><br />
                <Link to='/' className='WhiteLink'>Home</Link>&nbsp;&nbsp;
            </div>
            
        );
    }
}

class Profile extends Component {

    updateUser() {

        gql.request(
            `mutation updateUser($mail: String!, $login: String!, $firstName: String!, $lastName: String!, $password: String!, $dateOfBirth: String!, $phoneNumber: String!) {
                updateUser(mail: $mail, login: $login, firstName: $firstName, lastName: $lastName, password: $password, dateOfBirth: $dateOfBirth, phoneNumber: $phoneNumber)
                {
                  mail
                  login
                  firstName
                  lastName
                  password
                  dateOfBirth
                  phoneNumber
                }
              }`,
            {login: this.login.value,
                mail: this.mail.value,
                password: this.password.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                dateOfBirth: this.dateOfBirth.value,
                phoneNumber: this.phoneNumber.value}
        )
            .then(data => store.dispatch({type: 'ADD_USER', data: {user:data.createUser}}));

        this.login.value = '';
        this.mail.value = '';
        this.password.value = '';
        this.firstName.value = '';
        this.lastName.value = '';
        this.dateOfBirth.value = '';
        this.phoneNumber.value = '';
    }

            

    render() {
        return (

            <div className=" App-header App SectionApp">
                <h1>Update User</h1><br /><br />
                <input className="InputSpace" placeholder='Type your login'  type="text" ref={(input) => { this.login = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your mail'  type="text" ref={(input) => { this.mail = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your firstName'  type="text" ref={(input) => { this.firstName = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your lastName'  type="text" ref={(input) => { this.lastName = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your password'  type="text" ref={(input) => { this.password = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your dateOfBirth'  type="text" ref={(input) => { this.dateOfBirth = input }} /><br /><br />
                <input className="InputSpace" placeholder='Type your phoneNumber'  type="text" ref={(input) => { this.phoneNumber = input }} /><br /><br />
                <button onClick={this.updateUser.bind(this)}>Update user</button><br /><br />
                <Link to='/' className='WhiteLink'>Home</Link>&nbsp;&nbsp;
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
    // funcDetail(){
    //   for(key in arr)
    // }
    render (){
        return (
            <div className=" App-header App SectionApp">
            
                <h1>User info</h1><br /><br />
                <section className=''>
                    <div className='forBlocks block1'>
                        <Img src="https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png" />
                    </div>
                    <div className='forBlocks block2'>
                        {console.log(this.props.match.params.id)}
                        <h3>{this.props.match.params.id}</h3>
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
    details(){
        console.log('click td');
    }
    render(){
        return(
            <td key = {this.props.index} onClick={() => this.details()}>
                <Link className='TdLink' to ={`/detail/${this.props.index}`} >
                    {
                        this.props.name
                    }
                </Link>
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
                } else {
                    arr.push(this.props.columns[key]);
                }
            }
        }
        return arr;
    }

    newValueTr(){
        return this.createNewArr().map((el)=> <MakeTd name = {el} index = {this.props.index} />);
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
                            <Route path='/registration' component={Registration}/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/detail/:id' component={Detail}/>
                            <Route component={ErrPage}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
