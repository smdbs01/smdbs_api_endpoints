import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FastifyReply, FastifyRequest } from "fastify";

@Injectable()
export class PrivateMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}
  use(req: FastifyRequest["raw"], res: FastifyReply["raw"], next: () => void) {
    if (this.configService.get("NODE_ENV") === "development") {
      next();
      return;
    }

    const allowedOrigins = ["https://smdbs01.github.io", /.*smdbs.dev\/.*/];

    const origin = req.headers.origin;
    if (
      origin &&
      allowedOrigins.some(
        (o) => o === origin || (o instanceof RegExp && o.test(origin))
      )
    ) {
      next();
    } else {
      throw new HttpException("Forbidden access", 403);
    }
  }
}
