export interface SecResponseContract {
  end(): void
  send(data?: any): void
  json(data?: any): void
  status(code: number): this
  removeHeader(header: string): this
  header(header: string, value: any): this
  safeHeader(header: string, value: any): this
}
