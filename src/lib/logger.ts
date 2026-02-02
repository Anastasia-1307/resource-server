export enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG",
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
}

class Logger {
  private shouldLog(level: LogLevel): boolean {
    const envLevel = process.env.LOG_LEVEL || LogLevel.INFO;
    const levels = [LogLevel.ERROR, LogLevel.WARN, LogLevel.INFO, LogLevel.DEBUG];
    return levels.indexOf(level) <= levels.indexOf(envLevel as LogLevel);
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>) {
    if (!this.shouldLog(level)) return;

    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
    };

    const logString = JSON.stringify(logEntry);
    
    switch (level) {
      case LogLevel.ERROR:
        console.error(logString);
        break;
      case LogLevel.WARN:
        console.warn(logString);
        break;
      case LogLevel.INFO:
        console.info(logString);
        break;
      case LogLevel.DEBUG:
        console.debug(logString);
        break;
    }
  }

  error(message: string, context?: Record<string, any>) {
    this.log(LogLevel.ERROR, message, context);
  }

  warn(message: string, context?: Record<string, any>) {
    this.log(LogLevel.WARN, message, context);
  }

  info(message: string, context?: Record<string, any>) {
    this.log(LogLevel.INFO, message, context);
  }

  debug(message: string, context?: Record<string, any>) {
    this.log(LogLevel.DEBUG, message, context);
  }

  request(method: string, path: string, statusCode: number, duration: number, userId?: string) {
    this.info("HTTP Request", {
      method,
      path,
      statusCode,
      duration: `${duration}ms`,
      userId,
    });
  }

  auth(event: string, userId: string, context?: Record<string, any>) {
    this.info(`Auth: ${event}`, {
      userId,
      ...context,
    });
  }
}

export const logger = new Logger();
