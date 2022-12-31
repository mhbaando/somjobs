import DOMPurify from 'isomorphic-dompurify'

const cleanHTML = (htmlToClean: string): string => {
  const clean = DOMPurify.sanitize(`${htmlToClean}`, { USE_PROFILES: { html: true } })
  return clean
}

export default cleanHTML
