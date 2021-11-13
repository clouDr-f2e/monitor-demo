import routes from './routes'
import { Router, Switch, Route } from 'react-router'
import Main from 'src/layout'
import Navigation from 'src/layout/components/Navigation'

function AppRouter({ history }) {
    return (
        <>
            <Main>
                <Router history={history}>
                    <Navigation />
                    <Switch>
                        {routes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                        <Route component={() => <div>404</div>} />
                    </Switch>
                </Router>
            </Main>
        </>
    )
}

export default AppRouter
