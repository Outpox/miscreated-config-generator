export function download(content: string) {
  const filename = 'hosting.cfg'
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
  )
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

interface serializedInput {
  name: string
  value: string
  type: string
}

export function serializeForm(form: HTMLFormElement): serializedInput[] {
  const inputs = form.querySelectorAll('.parameter input:not([disabled]), .parameter select')
  return Array.from(inputs).map((child: HTMLInputElement) => {
    return {
      name: child.name,
      value: child.value,
      type: child.type || child.dataset.type!
    }
  })
}
