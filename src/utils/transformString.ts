export function transformString(
  inputStr: string,
  _transformation?: 'capitalize' | 'split_capitalize' | 'pascal',
): string {
  const transformation = _transformation ?? 'capitalize'

  if (transformation === 'capitalize') {
    return inputStr[0].toUpperCase() + inputStr.slice(1)
  } if (transformation === 'split_capitalize') {
    return inputStr
      .split('_')
      .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
      .join(' ')
  } if (transformation === 'pascal') {
    let converted = ''

    inputStr.split('').forEach((char) => {
      const charCode = char.charCodeAt(0)
      if (charCode >= 65 && charCode <= 90) {
        converted += ` ${char.toLowerCase()}`
      } else {
        converted += char
      }
    })

    return converted.charAt(0).toUpperCase() + converted.slice(1)
  }

  return inputStr
}
