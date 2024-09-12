import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { PublicModule } from "./api_public/public.module";
import { TestModule } from "./api_public/test/test.module";

@Module({
  imports: [
    PublicModule,
    RouterModule.register([
      {
        path: "public",
        module: PublicModule,
        children: [
          {
            path: "test",
            module: TestModule,
          },
        ],
      },
    ]),
  ],
})
export class AppModule {}
