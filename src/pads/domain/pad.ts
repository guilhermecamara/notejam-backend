import { IEntity, IMeta } from '../../../core/domain/entities'

export type Pad = IEntity &
  IMeta & {
    title: string
  }
