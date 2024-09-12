import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrivateModule } from "./api_private/private.module";
import { PublicModule } from "./api_public/public.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
      isGlobal: true,
    }),
    PublicModule,
    PrivateModule,
  ],
})
export class AppModule {}
