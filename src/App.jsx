import './App.css';
import {Route, Switch } from 'react-router-dom';
import Helloworld  from './component/helloworld/helloworld.jsx';
import PostData from './component/postData/postData';
function App() {
    return (
        <div>
            <Switch>
                <Route path="/hello" component={Helloworld} exact />
                <Route path='/post' component={PostData} />
            </Switch>
        </div>
    );
}

export default App;
