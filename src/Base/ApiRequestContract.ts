export interface ApiRequestContract {
  isInternRequest?: boolean
  where?: WhereContract
  orderBy?: OrderByContract
  includes?: IncludesContract[]
  otherQueries?: any
}

export interface IncludesContract {
  relation?: any
  where?: WhereContract
  orderBy?: OrderByContract
  includes?: IncludesContract[]
}

export interface WhereContract {
  [key: string]: string | number | boolean | object | null
}

export interface OrderByContract {
  [key: string]: 'ASC' | 'DESC' | 'asc' | 'desc'
}
