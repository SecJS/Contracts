import { PaginatedResponse } from './ApiResponseContract'
import { ApiRequestContract } from './ApiRequestContract'
import { PaginationContract } from './PaginationContract'

export interface RepositoryContract {
  Model: any
  wheres: any[]
  relations: any[]

  getAll(
    pagination?: PaginationContract,
    options?: ApiRequestContract,
  ): Promise<PaginatedResponse<any>>
  storeOne(body: any): Promise<any>
  getOne(
    id: string | number | any,
    options?: ApiRequestContract,
  ): Promise<any | undefined>
  updateOne(id: string | number | any, body: any): Promise<any>
  deleteOne(id: string | number | any, soft: boolean): Promise<any | void>
}
