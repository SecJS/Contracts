import { SecRequest } from './SecRequest'
import { SecResponse } from './SecResponse'

export interface SecContext {
  request: SecRequest
  response: SecResponse
}
