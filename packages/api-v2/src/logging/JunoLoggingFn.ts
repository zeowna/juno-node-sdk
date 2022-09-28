
export interface JunoLoggingObj {
  url: string;
  params: any;
  body: any;
  statusCode?: number;
  response?: any;
  method: string;
}

export type JunoLoggingFn = (config: JunoLoggingObj) => void | Promise<void>;
