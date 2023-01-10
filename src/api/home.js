import _axios from '@/utils/request'

export const getLovers = () => {
  return _axios({
    url: '/content/wxapp/loversProfile/json/lovers-1.json',
  })
}
