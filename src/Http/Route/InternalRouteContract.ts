import { SecHandlerContract } from '../SecHandlerContract'

export interface RouteContract {
  path: string
  method: string
  params: string[]
  matcher: RegExp
  handler: SecHandlerContract
}
