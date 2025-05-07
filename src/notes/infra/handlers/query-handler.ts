import { injectable } from 'tsyringe'
import { IRequestHandler } from '../../../core/infra/handler.js'
import { QueryNote } from '../../domain/commands/query.js'
import { Note } from '../../domain/entities/note.js'

@injectable()
export class QueryNoteHandler implements IRequestHandler<QueryNote, Note[]> {
  handle(request: QueryNote): Promise<Note[]> {
    return Promise.resolve([
      {
        title: 'First Note',
        text: 'Text of First note',
      },
      {
        title: 'Second Note',
        text: 'Text of Second note',
      },
      {
        title: 'Third Note',
        text: 'Text of Third note',
      },
    ])
  }
}
