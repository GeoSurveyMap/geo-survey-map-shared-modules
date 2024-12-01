import { useQuery } from '@tanstack/react-query'
import { getConnectionInfo } from './ipinfo'
import { queryKeys } from '../../api/libs/query'

export function useGetCountry(token: string) {
	return useQuery({
		queryKey: queryKeys.ipInfo.country,
		queryFn: () => getConnectionInfo(token),
		select: ({ data }) => data.country
	})
}
