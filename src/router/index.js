import routes from './routes'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'src/utils/createHistory'
import Navigation from 'src/layout/components/Navigation'

const history = createHistory({ hash: true })

function AppRouter() {
    return (
        <Router history={history}>
            <Navigation />
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        </Router>
    )
}

export default AppRouter
