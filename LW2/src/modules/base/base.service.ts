import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseService {
  async getStudentData(): Promise<string> {
    return "КП-23 Кравчук Денис";
  }
}
