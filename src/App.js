import dva from 'dva'
import { createHashHistory } from 'history'
import './App.less'
import AppRouter from 'src/router'
import * as models from 'src/models'

const app = dva({
    history: createHashHistory(),
})

for (let modelsKey in models) {
    app.model(models[modelsKey])
}

app.router(AppRouter)

const App = app.start()

export default App

export { app }
