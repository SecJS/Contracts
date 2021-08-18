import { SecContextContract } from './Context/SecContextContract'

export interface SecHandlerContract {
  (ctx: SecContextContract): Promise<any> | any
}
