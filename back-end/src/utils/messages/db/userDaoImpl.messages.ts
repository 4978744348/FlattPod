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