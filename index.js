const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  try {
    const finePath = './index.html'
    const fileContent = await fs.promises.readFile(finePath, 'utf-8')
    ctx.type = 'text/html'
    ctx.body = fileContent
  } catch (e) {
    ctx.status = 500
    ctx.body = 'Internal Server Error'
  }
})

router.get('/demo/:file', async ctx => {
  const { file } = ctx.params
  try {
    const finePath = `./demo/${file}`
    const fileContent = await fs.promises.readFile(finePath, 'utf-8')
    ctx.type = 'text/html'
    ctx.body = fileContent
  } catch (e) {
    ctx.status = 500
    ctx.body = 'Internal Server Error'
  }
})

app.use(router.routes())

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
