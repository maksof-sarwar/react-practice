import './App.css';
import {Route, Switch } from 'react-router-dom';
import Helloworld  from './component/helloworld.jsx';
function App() {
    return (
        <div>
            <Switch>
                <Route path="/hello" component={Helloworld} exact />
                <Route>hello</Route>
            </Switch>
        </div>
    );
}

export default App;
