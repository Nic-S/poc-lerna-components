import React from 'react'

export interface Props {
  innerIcon: any
  onClick?: () => void
  size: 'medium' | 'small'
}

export function ConcentricCircleIcon({
  innerIcon,
  onClick = undefined,
  size
}: Props): JSX.Element {
  let sizeVal = 24
  let centerVal = 2
  let innerIconSize = 20
  if (size === 'small') {
    sizeVal = 16
    centerVal = 3
    innerIconSize = 10
  }
  return (
    <svg
      style={{ cursor: onClick ? 'pointer' : '' }}
      onClick={onClick}
      width={sizeVal}
      height={sizeVal}
      viewBox={`0 0 ${sizeVal} ${sizeVal}`}
      fill='none'
      xmlns='http://www.w3.org/1200/svg'
    >
      <circle
        cx={sizeVal / 2}
        cy={sizeVal / 2}
        r={sizeVal / 2}
        fill={'#E6F3FD'}
      />
      <svg x={centerVal} y={centerVal}>
        {innerIcon(innerIconSize, innerIconSize, {
          color: '#1986f5'
        })}
      </svg>
    </svg>
  )
}
