import dva from 'dva'
import { createHashHistory } from 'history'
import './App.less'
import AppRouter from 'src/router'
import performance from 'src/models/performance'

const app = dva({
    history: createHashHistory(),
})

app.model(performance)

app.router(AppRouter)

const App = app.start()

export default App

export { app }
