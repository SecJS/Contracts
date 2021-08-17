import { HandlerContract } from '../HandlerContract'

export interface RouteContract {
  path: string
  method: string
  params: string[]
  matcher: RegExp
  handler: HandlerContract
}
