const KoaRouter = require('koa-router')
const router = new KoaRouter({ prefix: '/v1/category' })

const Article = require('../../models/article')

router.get('/list', async (ctx) => {

    let result = await Article.findAll({ attributes: ['category'] })

    // 转一维
    result = result.map(value => value['category'])
    // 去重
    result = Array.from(new Set(result))

    ctx.body = result
})

module.exports = router
