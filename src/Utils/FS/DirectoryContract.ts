import { FileContract } from './FileContract'

export interface DirectoryContract {
  name: string
  path: string
  files: FileContract[]
  folders: DirectoryContract[]
}
