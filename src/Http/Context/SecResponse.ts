export interface SecResponse {
  end(): void
  send(data?: any): void
  json(data?: any): void
  status(code: number): this
  header(header: string, value: any): this
  safeHeader(header: string, value: any): this
  removeHeader(header: string, value: any): this
}
