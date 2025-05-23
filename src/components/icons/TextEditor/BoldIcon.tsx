function BoldIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='a'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path fill='#D9D9D9' d='M0 0h24v24H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          d='M6.8 19V5h5.525q1.624 0 3 1T16.7 8.775q0 1.275-.575 1.963-.575.687-1.075.987.626.275 1.387 1.025.763.75.763 2.25 0 2.224-1.625 3.113-1.625.887-3.05.887zm3.025-2.8h2.6q1.2 0 1.462-.612.263-.614.263-.888 0-.275-.263-.887-.262-.613-1.537-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425a1.4 1.4 0 0 0 .375-.95q0-.6-.425-.975t-1.1-.375H9.825z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default BoldIcon;
