import { useQuery } from 'react-query'

export const getPrefectures = async ({ apiKey }: { apiKey: string }) => {
  console.log('called a')
  const data = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
      },
    }
  )
  const json = await data.json()
  console.log('called b:', json)
  return json.result
}

export const usePrefectures = ({ apiKey }: { apiKey: string }) => {
  console.log('called c')

  const { data, refetch, error, status } = useQuery({
    queryKey: 'prefectures',
    queryFn: async () => getPrefectures({ apiKey }),
    cacheTime: 30000,
    staleTime: 30000,
    enabled: false,
  })

  console.log('called d')
  console.log(error)
  return { prefecturesData: data, prefecturesRefetch: refetch }
}

export const getPopulationComposition = async ({
  apiKey,
  prefCode,
}: {
  apiKey: string
  prefCode: string
}) => {
  const data = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
      },
    }
  )
  const json = await data.json()
  return json.result
}

export const usePopulationComposition = ({
  apiKey,
  prefCode,
}: {
  apiKey: string
  prefCode: string
}) => {
  const { data, refetch, error } = useQuery({
    queryKey: 'populationComposition',
    queryFn: async () => getPopulationComposition({ apiKey, prefCode }),
    cacheTime: 30000,
    staleTime: 30000,
    enabled: false,
  })
  console.log(error)
  return {
    populationCompositionData: data,
    populationCompositionRefetch: refetch,
  }
}
