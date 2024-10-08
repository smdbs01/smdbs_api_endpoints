import { Controller, Get } from "@nestjs/common";
import { TestService } from "./test.service";

@Controller("public/test")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): { message: string } {
    return this.testService.getHello();
  }
}
