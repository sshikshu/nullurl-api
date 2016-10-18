import * as Router from 'koa-router';
import * as jwt from 'koa-jwt';

import { urlModel } from './url.model';

const router = new Router({ prefix: '/api/url' });

router.get('/', async (ctx, next) => {
    try {
        let data = await urlModel.find({ owner: ctx.state.user.id });
        ctx.body = { data };
    } catch (err) {
        ctx.body = { err };
    }
});

router.post('/', async (ctx, next) => {
    try {
        let url = Object.assign(ctx.request.body, { owner: ctx.state.user.id });
        let data = await urlModel.create(url);
        ctx.body = { data };
    } catch (err) {
        ctx.body = { err };
    }
});

router.patch('/:url', async (ctx, next) => {
    try {
        let data = await urlModel.findOneAndUpdate({ _id: ctx.params.url, owner: ctx.state.user.id }, ctx.request.body);
        ctx.body = { data };
    } catch (err) {
        ctx.body = { err };
    }
});

router.delete('/:url', async (ctx, next) => {
    try {
        let data = await urlModel.findOneAndRemove({ _id: ctx.params.url, owner: ctx.state.user.id });
        ctx.body = { data };
    } catch (err) {
        ctx.body = { err };
    }
});

export { router };