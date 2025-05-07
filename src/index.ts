import 'reflect-metadata'
import { addNotes } from './ioc.js'
import { queryUseCase } from './notes/application/query-use-case.js'
import { QUERY_NOTE_HANDLER, QueryNote } from './notes/domain/commands/query.js'
import { container } from 'tsyringe'

addNotes()
console.log(await queryUseCase(container.resolve(QUERY_NOTE_HANDLER)))
console.log('Hello World')
