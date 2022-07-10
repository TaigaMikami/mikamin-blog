import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

const formatDate = (date: string) => {
  const now = dayjs(date).format('YYYY-MM-DD HH:mm:ss')
  return now
}

export default formatDate
