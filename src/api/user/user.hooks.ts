import { useMutation } from '@tanstack/react-query';
import { postRegisterUser } from './user';
import { queryClient, queryKeys } from '../../api/libs/query';

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: postRegisterUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.survey.user] });
    },
  });
};
