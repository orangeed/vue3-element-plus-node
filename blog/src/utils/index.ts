import dayjs from 'dayjs'
// 日期格式化为 2021-05-27 09：00：00
export const dateToSecond = (dataTime) => {
    return dayjs(dataTime).format('YYYY-MM-DD HH:mm:ss')
}

// 判断是否是移动端
export const isPhone = () => {
    if (
        navigator.userAgent.match(
            /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
        )
    ) {
        //显示移动端的代码
        console.log("这个是移动端");
        return true
    } else {
        //显示非移动端的代码
        console.log("这个是pc端");
        return false
    }
}