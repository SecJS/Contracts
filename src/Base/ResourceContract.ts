export interface ResourceContract<TModel, TModelJson> {
  toJson(model: TModel | null | void): TModelJson
  toArray(models: TModel[] | null | void): TModelJson[]
}
