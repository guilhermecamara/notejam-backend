import { IEntity, IMeta } from '../../../core/domain/entities.js'

export type Note = IEntity &
  IMeta & {
    title: string
    text: string
  }
