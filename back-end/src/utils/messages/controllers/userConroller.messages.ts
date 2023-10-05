import { METHOD_NOT_ALLOWED } from './generalControllers.messages';

export enum UserControllerErorr {
  _500 = 'Internal Server Error',
  _400_NOT_ALLOWED_TAGS = 'The body requst has not allowed any tags. Allowed only character(upper/low case) and digital symbols',
  _400_USER_WAS_NOT_CREATED = 'The user was not created',
  _400_USER_WAS_NOT_UPDATED = 'The user was not updated',
  _400_USER_WAS_NOT_DELETED = 'The user was not deleted',
  _400_WRONG_GET_ID = 'wrong passing ID: /api/users/:id',
  _400_WRONG_DELETE_ID = 'wrong passing ID: /api/users/delete/:id',
  _400_METHOD_NOT_ALLOWED = METHOD_NOT_ALLOWED,
}
