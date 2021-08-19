import { SecNextContract } from './SecNextContract'
import { SecRequestContract } from './SecRequestContract'
import { SecResponseContract } from './SecResponseContract'

export interface SecContextContract {
  next: SecNextContract
  request: SecRequestContract
  response: SecResponseContract
}
