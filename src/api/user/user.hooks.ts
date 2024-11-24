import { useMutation } from '@tanstack/react-query';
import { postRegisterUser } from './user';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: postRegisterUser,
  });
};
