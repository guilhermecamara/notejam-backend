import { IRequest } from '../../../core/domain/request.js'
import { Note } from '../entities/note.js'

export const QUERY_NOTE_HANDLER = Symbol('QueryNoteHandler')

export class QueryNote implements IRequest<Note> {
  constructor(
    public filters?: string,
    public sort?: string
  ) {}
}
