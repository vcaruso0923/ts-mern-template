import {ObjectId} from 'mongodb'
import {Request} from 'express'

export interface RecordPayloadInterface extends Partial<Request> {
    name?: string
    position?: string
    level?: string
}

export interface RecordResponseInterface extends RecordPayloadInterface {
    _id: ObjectId
    date: Date
}
