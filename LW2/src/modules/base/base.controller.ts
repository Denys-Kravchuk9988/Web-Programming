import { Controller, Get } from "@nestjs/common";
import { BaseService } from "./base.service";

@Controller("base")
export class BaseController {
  constructor(private _baseService: BaseService) {}

  @Get("introduction")
  async introduceStudent(): Promise<string> {
    return await this._baseService.getStudentData();
  }
}
