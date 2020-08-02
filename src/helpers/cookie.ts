const cookie = {
  read(name: string): string | null {
    console.log('document.cookie', document.cookie)
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
