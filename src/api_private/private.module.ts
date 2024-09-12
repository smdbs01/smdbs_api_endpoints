import { MiddlewareConsumer, Module } from "@nestjs/common";
import { PrivateMiddleware } from "src/middlewares/private.middleware";
import { TestModule } from "./test/test.module";

@Module({
  imports: [TestModule],
})
export class PrivateModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PrivateMiddleware).forRoutes("*");
  }
}
