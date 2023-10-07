export type userDaoError = {
  class: string;
  method: string;
  message: string;
}

export const GET_ALL_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'getAll',
  message: 'cannot get all users'
};

export const GET_ADD_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'add',
  message: 'cannot create user'
};

export const GET_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'getById',
  message: 'cannot get user by id'
};

export const DELETE_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'deleteById',
  message: 'cannot delete user by id'
};

export const UPDATE_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'updateById',
  message: 'cannot update user by id'
};