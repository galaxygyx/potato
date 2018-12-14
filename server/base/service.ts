import { App } from "../app";
import { BaseContext } from "koa";


export class Service {
    ctx: BaseContext;
    app: App;
    constructor(ctx: BaseContext) {
        this.ctx = ctx;
        this.app = ctx.app;
    }
}
