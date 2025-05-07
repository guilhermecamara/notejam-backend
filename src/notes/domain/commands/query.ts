import { Note } from '../entities/note'
import { IRequest } from '../../../core/domain/request'

export class QueryNote implements IRequest<Note> {
  constructor(
    public filters?: string,
    public sort?: string
  ) {}
}
