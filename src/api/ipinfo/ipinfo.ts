import { axiosClient, updateApiClient } from '../libs/axiosClient'
import { getConnectionInfoResponse } from './ipinfo.types'

export const getConnectionInfo = (token: string) => {
	const params = new URLSearchParams(token)
	updateApiClient.setBaseURL('https://ipinfo.io?')
	return axiosClient.get<getConnectionInfoResponse>(params.toString())
}
