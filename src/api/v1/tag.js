const KoaRouter = require("koa-router")
const router = new KoaRouter({ prefix: '/v1/tag' })

const Article = require('../../models/article')

router.get('/list', async (ctx) =>{

    let result = await Article.findAll({ attributes: ['tags'] })

    // 转一维
    result = result.map(v => v['tags'])
    // 字符串标签列表转数组
    const tmp = []
    result.forEach((v, i) => tmp.push(...v.split(',')))
    // 去重
    result = Array.from(new Set(tmp))

    ctx.body = result
})

module.exports = router
