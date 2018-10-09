import React, {Component} from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect}   from 'react-redux';
import Img from 'react-image';
const API = 'http://api.tvmaze.com/search/shows?q=girls';
const thValue = new Set(['name', 'language', 'genres', 'status','raiting']);
let page = '';

function reducer(state, action){
    if (state === undefined){
        return page;
    }

    else if (action.type === 'DATA_USER'){
        console.log(action.data);
        return action.data.user;
    }
    return state;
}

class MakeTd extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <td>
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

    getArr(){
        let arr = [];
        for(let key in this.props.columns){
            if(thValue.has(key)){

                arr.push(this.props.columns[key]);
            }
        }
        return arr;
    }

    setTrValue(){
        return this.getArr().map(el=> <MakeTd name = {el} />);
    }


    render()
    
    {
        return(
            <tr>{
                this.setTrValue()
            }
            </tr>
            
        );
    }
}    

class Table extends Component{

    makeColumns(){
        return this.props.data.map((row, i)=> <MakeTr key={i} columns = {row.show } index ={i} />);
    }

    render()
    {
        return(
            <table className='infoBlock'>
                <tbody>
                    {
                        this.makeColumns()
                    }
                </tbody>
            </table>
        );
    }
}

class HomeApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            news: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ news: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { news, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <Table data = {news}/> 
        );
    }
}



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
                <HomeApp /><br /><br />
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

var store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const mapStateToProps = function(store) {
    return {
        page: store.page,
    };
};

Home = connect(mapStateToProps)(Home);
Login = connect(mapStateToProps)(Login);

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
