export type userSevicesError = {
  class: string;
  method: string;
  message: string;
}

export const CREATE_USER_JWT_ERROR: userSevicesError = {
  class: 'UserServiceImpl',
  method: 'createUserFromJWT',
  message: 'user_id, email are empty'
};