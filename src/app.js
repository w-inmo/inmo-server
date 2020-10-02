const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const static = require('koa-static')
const { join } = require('path')
// const logger = require('koa-pino-logger')

const catchError = require('./middlewares/exception')
const InitManagaer = require('./core/InitManager')

const app = new Koa()

app.use(cors())
app.use(static(join(__dirname, './www')))
app.use(static(join(__dirname, './www/manager')))
app.use(static(join(__dirname, './www/blog')))
// app.use(logger({ prettyPrint: true }))
app.use(catchError)
app.use(koaBody({ multipart: true }))

InitManagaer.initCore(app)

app.listen(80)
