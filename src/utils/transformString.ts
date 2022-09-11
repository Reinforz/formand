export function transformString(
  inputStr: string,
  transformation?: 'capitalize' | 'split_capitalize'
) {
  transformation = transformation ?? 'capitalize';

  if (transformation === 'capitalize') {
    return inputStr[0].toUpperCase() + inputStr.slice(1);
  } else {
    return inputStr
      .split('_')
      .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
      .join(' ');
  }
}
