# market
const logger = require('koa-morgan')
server
	.use(logger('tiny')).use(router.routes())
	.use(router.allowedMethods())
server.listen(3000)

# serve at localhost:3000
npm run start
