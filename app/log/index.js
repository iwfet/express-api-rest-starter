import { createLogger, transports, format } from "winston";
import "dotenv/config";
import { DateGMT } from "../utils/dateGMT";



const customFormat = format.combine(
    format.printf((info) => {
      return `${new DateGMT().getData()} - [${info.level
        .toUpperCase()
        .padEnd(5)}] - ${info.message}`;
    })
  );
  
  export const logger = createLogger({
    format: customFormat,
    transports: [
      new transports.File({
        filename: `${process.env.CAMINHOLOGS}/logs.log`,
      }),
    ],
  });
  
  
  if (process.env.NODE_ENV === "development") {
    logger.add(
      new transports.Console({
        format: customFormat,
      })
    );
  }