import { container } from 'tsyringe'
import { IRequestHandler } from './core/infra/handler.js'
import { QueryNote, QUERY_NOTE_HANDLER } from './notes/domain/commands/query.js'
import { Note } from './notes/domain/entities/note.js'
import { QueryNoteHandler } from './notes/infra/handlers/query-handler.js'

export function addNotes() {
  container.register<IRequestHandler<QueryNote, Note[]>>(QUERY_NOTE_HANDLER, {
    useClass: QueryNoteHandler,
  })
}
