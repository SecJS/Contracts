import { SecHandlerContract } from '../SecHandlerContract'

export interface InternalRouteContract {
  path: string
  method: string
  params: string[]
  matcher: RegExp
  handler: SecHandlerContract
}
