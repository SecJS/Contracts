import { IncomingMessage, ServerResponse } from 'http'

export interface HandlerContract {
  (request: IncomingMessage, response: ServerResponse): Promise<any> | any
}
