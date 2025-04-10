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

// GET /po
export interface GetRecordsResponse {
    records: RecordResponseInterface[]
}

// GET /latest
export interface GetLatestRecordsResponse {
    records: RecordResponseInterface[]
}

// GET /:id
export interface GetRecordByIdRequest extends Request<{id: string}> {}
export interface GetRecordByIdResponse {
    record?: RecordResponseInterface
    message?: string // For "Not found" case
}

// POST /record/add
export interface AddRecordRequest extends Request<{}, {}, RecordPayloadInterface> {}
export interface AddRecordResponse {
    insertedId: ObjectId
}

// PATCH /comment/:id
export interface AddCommentRequest extends Request<{id: string}, {}, {comment: string}> {}
export interface AddCommentResponse {
    modifiedCount: number
}

// DELETE /:id
export interface DeleteRecordRequest extends Request<{id: string}> {}
export interface DeleteRecordResponse {
    deletedCount: number
}
