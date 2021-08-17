import { SecContext } from './Context/SecContext'

export interface SecHandlerContract {
  (ctx: SecContext): Promise<any> | any
}
