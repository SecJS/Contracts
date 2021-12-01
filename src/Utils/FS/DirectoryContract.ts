import { FileContract } from './FileContract'

export interface DirectoryContract {
  name: string
  base: string
  path: string
  files: FileContract[]
  folders: DirectoryContract[]
}
