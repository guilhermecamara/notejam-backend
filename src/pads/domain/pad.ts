import { IEntity, IMeta } from '../../core/domain/entities.js'

export type Pad = IEntity &
  IMeta & {
    title: string
  }
