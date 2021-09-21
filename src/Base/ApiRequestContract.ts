export interface WhereContract {
  [key: string]: any | null
}

export interface OrderByContract {
  [key: string]: 'ASC' | 'DESC' | 'asc' | 'desc'
}

export interface IncludesContract {
  relation?: any
  where?: WhereContract
  orderBy?: OrderByContract
  includes?: IncludesContract[]
}

export interface ApiRequestContract {
  isInternRequest?: boolean
  where?: WhereContract
  orderBy?: OrderByContract
  includes?: IncludesContract[]
  otherQueries?: any
}
