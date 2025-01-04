import {ObjectId} from 'mongodb'
import {Request} from 'express'

export interface RecordRequestInterface extends Partial<Request> {
    date: Date
    name?: string
    position?: string
    level?: string
}

export interface RecordInterface extends RecordRequestInterface {
    _Id: ObjectId
}
