import { PaginatedResponse } from './ApiResponseContract'
import { PaginationContract } from './PaginationContract'
import { ApiRequestContract } from './ApiRequestContract'

export interface RepositoryContract<TModel> {
  /**
   * Used to make all the queries to database
   */
  model: TModel

  /**
   * Used to map the wheres
   */
  wheres: string[]

  /**
   * Used to map the relations
   */
  relations: string[]

  /**
   * Retrieves multiple data from Database
   *
   * @param pagination The pagination used to paginate data
   * @param options The options used to filter data
   * @return The paginated response with models retrieved
   * @throws UnprocessableEntityException When trying to filter or include something outside the where/include array.
   */
  getAll(
    pagination?: PaginationContract,
    options?: ApiRequestContract,
  ): Promise<PaginatedResponse<TModel> | { data: TModel[]; total: number }>

  /**
   * Retrieves one data from Database
   *
   * @param id The id of the model
   * @param options The options used to filter data
   * @return The model founded or undefined
   * @throws UnprocessableEntityException When trying to filter or include something outside the where/include array.
   */
  getOne(id?: string, options?: ApiRequestContract): Promise<TModel | null>

  /**
   * Store one in database
   *
   * @param body The body that is going to be used to store
   * @return The model created with body information
   */
  storeOne(body: any): Promise<TModel>

  /**
   * Update one from database
   *
   * @param id The id or model that is going to be updated
   * @param body The body that is going to be used to update
   * @return The model updated with body information
   * @throws NotFoundException if cannot find model with ID
   */
  updateOne(id: any, body: any): Promise<TModel>

  /**
   * Delete one from database
   *
   * @param id The id or model that is going to be deleted
   * @param soft If is a soft delete or a true delete from database
   * @return The model soft deleted or void if deleted
   * @throws NotFoundException if cannot find model with ID
   * @throws BadRequestException if model is already deleted
   */
  deleteOne(id: any, soft?: boolean): Promise<TModel | void>
}
