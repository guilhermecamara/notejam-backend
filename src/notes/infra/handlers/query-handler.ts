import { QueryNote } from '../../domain/commands/query'
import { Note } from '../../domain/entities/note'
import { IRequestHandler } from '../../../core/infra/handler'

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
