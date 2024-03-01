import {ObjectId} from 'mongodb'
import { Request } from 'express'

export interface RecordRequestInterface extends Partial<Request> {
    name?: string
    position?: string
    level?:string
}

export interface RecordInterface {
    _Id: ObjectId
    date: Date
    name: string
    position: string
    level:string
}