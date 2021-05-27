import dayjs from 'dayjs'
// 日期格式化为 2021-05-27 09：00：00
export const dateToSecond = (dataTime) => {
    return dayjs(dataTime).format('YYYY-MM-DD HH:mm:ss')
}