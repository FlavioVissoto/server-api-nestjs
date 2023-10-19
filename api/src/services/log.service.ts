import { Injectable } from '@nestjs/common';
import { Logger, createLogger, format, transports } from 'winston';

export type LevelLog = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

export interface LogError {
  file: string;
  method: string;
  name: string;
  message: string;
  stack?: string;
  //[key: string]: string;
}

@Injectable()
export class LogService {
  constructor() {
    this.createLogger();
  }

  public logger: Logger;

  private levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  };

  private colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
  };

  private level(): 'warn' | 'debug' {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
  }

  private formatConfig = format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), format.json());

  private transportsConfig = [
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new transports.File({
      filename: 'logs/http.log',
      level: 'http',
    }),
    new transports.File({
      filename: 'logs/info.log',
      level: 'info',
    }),
    new transports.File({
      filename: 'logs/all.log',
      format: format.combine(format.json()),
    }),
  ];

  private createLogger(): void {
    this.logger = createLogger({
      level: this.level(),
      levels: this.levels,
      format: this.formatConfig,
      transports: this.transportsConfig,
    });
  }

  public writeError(err: LogError) {
    const logMessage = `File: ${err.file} ### Method: ${err.method} ### Name: ${err.name} ### Message: ${err.message} ### Stack: ${err.stack}`;
    this.logger.error(logMessage);
  }

  public write(level: LevelLog, errName: string, errMessage: string, errStack = ''): void {
    const logMessage = `Name: ${errName}\nMessage: ${errMessage}\nStack: ${errStack}`;
    this.logger[level](logMessage);
  }
}
