import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
  getHello(): { message: string } {
    return { message: "Hello World!" };
  }
}
