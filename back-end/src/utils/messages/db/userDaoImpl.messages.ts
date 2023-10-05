type userDaoError = {
  class: string;
  method: string;
  message: string;
}

export const GET_ALL_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'getAll',
  message: 'query is failed'
};

export const GET_ADD_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'add',
  message: 'query is failed'
};

export const GET_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'getById',
  message: 'query is failed'
};

export const DELETE_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'deleteById',
  message: 'query is failed'
};

export const UPDATE_BY_ID_ERROR: userDaoError = {
  class: 'UserDaoImpl',
  method: 'updateById',
  message: 'query is failed'
};