import React from 'react'

export interface CodeAndDescriptionProps {
  separator?: string
  code: string
  description: string
}

export function CodeWithDescription({
                                      separator = '-',
                                      code,
                                      description
                                    }: CodeAndDescriptionProps): JSX.Element {
  const prefixedDescription = description == null && description === ''
    ? ''
    : `${separator} ${description}`
  return <>{`${code} ${prefixedDescription}`}</>
}
