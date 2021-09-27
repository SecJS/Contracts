export interface ResourceContract<TModel, TModelJson> {
  toJson(model: TModel | null | void): TModelJson | null | void
  toArray(models: TModel[] | null | void): TModelJson[] | null | void
}
