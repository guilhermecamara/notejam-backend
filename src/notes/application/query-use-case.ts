import { IRequestHandler } from '../../core/infra/handler.js'
import { QueryNote } from '../domain/commands/query.js'
import { Note } from '../domain/entities/note.js'

export async function queryUseCase(handler: IRequestHandler<QueryNote, Note[]>): Promise<Note[]> {
  const notes: Note[] = await handler.handle(new QueryNote('user123'))
  return notes
}
