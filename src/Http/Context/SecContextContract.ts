import { SecRequestContract } from './SecRequestContract'
import { SecResponseContract } from './SecResponseContract'

export interface SecContextContract {
  request: SecRequestContract
  response: SecResponseContract
}
