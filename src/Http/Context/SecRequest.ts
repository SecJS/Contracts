export interface SecRequest {
  body: any
  ip: string
  params: any
  queries: any
  method: string
  fullUrl: string
  baseUrl: string
  originalUrl: string
  payload(payload: string, defaultValue?: string): any
  param(param: string, defaultValue?: string): string | undefined | null
  query(query: string, defaultValue?: string): string | undefined | null
  header(header: string, defaultValue?: string): string | undefined | null
}
