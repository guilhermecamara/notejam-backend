import { IRequest } from '../domain/request.js'

export interface IRequestHandler<TRequest extends IRequest<TResponse>, TResponse> {
  handle(request: TRequest): Promise<TResponse>
}
