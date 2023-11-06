import { API_GITHUB } from '~/utils/constants'

// Hàm lấy thời gian cập nhật lần cuối từ GitHub API
export const fetchLastUpdatedTime = async () => {
  try {
    const response = await fetch(API_GITHUB)
    const data = await response.json()

    const lastUpdatedTime = new Date(data.pushed_at)
    // Lấy ngày, tháng, năm, giờ, phút và giây
    const day = lastUpdatedTime.getDate()
    const month = lastUpdatedTime.getMonth() + 1 // Vì tháng bắt đầu từ 0
    const year = lastUpdatedTime.getFullYear()
    const hours = lastUpdatedTime.getHours()
    const minutes = lastUpdatedTime.getMinutes()
    const seconds = lastUpdatedTime.getSeconds()

    // Định dạng thành "DD/MM/YYYY, hh:mm:ss"
    const formattedLastUpdatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}, ${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`

    return formattedLastUpdatedTime
  } catch (error) {
    console.error('Lỗi khi gọi GitHub API:', error)
  }
}
