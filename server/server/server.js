const Koa = require('koa')
const cors = require('@koa/cors');
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require("koa-bodyparser")
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('db.json')

const server = new Koa()
server.use(bodyParser())
const router = new Router()
const db = low(adapter)
low(adapter)
  .then(db => {
		router
		.get('/', ctx => {
			ctx.body = 'server main'
		})
		.get('/components', async (ctx, next) => {
			ctx.body = await db.get('components')
		})
	})
	.then(() => {
    server
			.use(logger('tiny'))
			.use(cors())
			.use(router.routes())
			.use(router.allowedMethods())
			server.listen(3000)
  })




