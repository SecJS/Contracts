import { FileContract } from './FileContract'

export interface DirectoryContract {
  path: string
  files: FileContract[]
  folders: DirectoryContract[]
}
