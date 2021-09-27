import { ResourceContract } from './ResourceContract'
import { ApiRequestContract } from './ApiRequestContract'
import { PaginationContract } from './PaginationContract'
import { RepositoryContract } from './RepositoryContract'

export interface BaseService<TModel, TModelJson> {
  resource: ResourceContract<TModel, TModelJson>
  repository: RepositoryContract<TModel>

  /**
   * Find one model based on options and id but returns the ORM instance
   *
   * @param id The id that needs to be fetched
   * @param options Properties to make the request based on ApiRequestContract
   * @return The model from ORM instance
   * @throws NotFoundException When can't find the model.
   * @throws UnprocessableEntityException When trying to filter or include something outside the where/include array.
   */
  findOneInstance(id: string, options?: ApiRequestContract): TModel

  /**
   * Find all models based on options and paginate it based on paginate
   *
   * @param paginate Properties to make the pagination based on PaginationContract
   * @param options Properties to make the request based on ApiRequestContract
   * @return The model json resource in array
   * @throws UnprocessableEntityException When trying to filter or include something outside the where/include array.
   */
  findAll(
    paginate: PaginationContract,
    options?: ApiRequestContract,
  ): Promise<TModelJson[]>

  /**
   * Find one model based on options and id
   *
   * @param id The id that needs to be fetched
   * @param options Properties to make the request based on ApiRequestContract
   * @return The model json resource in object
   * @throws NotFoundException When can't find the model.
   * @throws UnprocessableEntityException When trying to filter or include something outside the where/include array.
   */
  findOne(id: string, options?: ApiRequestContract): Promise<TModelJson>

  /**
   * Create one model based on dto
   *
   * @param dto The dto that is going to be used to create the model
   * @return The model json resource in object
   */
  createOne(dto: any): Promise<TModelJson>

  /**
   * Update one model based on id or dto
   *
   * @param id The id that needs to be fetched
   * @param dto The dto that is going to be used to update the model
   * @return The model json resource in object
   * @throws NotFoundException When can't find the model.
   */
  updateOne(id: string, dto: any): Promise<TModelJson>

  /**
   * Update one model based on id or dto
   *
   * @param id The id that needs to be fetched
   * @param soft If is a soft or a hard deletion from database
   * @return The model json resource in object or void
   * @throws NotFoundException When can't find the model.
   */
  deleteOne(id: string, soft?: boolean): Promise<TModelJson>

  /**
   * Creates a new instance of the given entity
   *
   * @param create Properties of the instance to create.
   * @return The entity instance to be created
   */
  setDataCreate(create: any): TModel

  /**
   * Updates the given instance of the entity
   *
   * @param model The current instance
   * @param update Properties to apply as update.
   * @return The updated entity instance
   */
  setDataUpdate(model: TModel, update: any): TModel
}
