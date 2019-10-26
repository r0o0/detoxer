// 쿠키 헬퍼 함수 모음

export function getCookie (name) {
  const cookies = document.cookie.split(';')
  cookies.forEach((cookie, i) => {
    const splitCookie = cookie.split('=')
    const key = splitCookie[0].trim()
    const value = splitCookie[1]
    if (key === name) return value
    return null
  })
}

export function setCookie (name, value, maxDays) {
  let days = maxDays
  if (typeof maxDays !== 'number') days = maxDays * 1
  const maxAge = 60 * 60 * 24 * days

  const encodedValue = encodeURIComponent(value)

  document.cookie = `${name}=${encodedValue}; max-age=${maxAge}`
}

export function isCookieExist (name) {
  if (getCookie(name)) return true
  return false
}
