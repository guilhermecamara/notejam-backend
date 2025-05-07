import { IEntity, IMeta } from '../../../core/domain/entities'

export type Note = IEntity &
  IMeta & {
    title: string
    text: string
  }
