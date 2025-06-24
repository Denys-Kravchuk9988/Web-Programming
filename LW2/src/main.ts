import * as fs from "fs";
import * as path from "path";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(
      path.join(__dirname, "../certificates/localhost-key.pem")
    ),
    cert: fs.readFileSync(
      path.join(__dirname, "../certificates/localhost.pem")
    ),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  await app.listen(3000);
}

bootstrap();
