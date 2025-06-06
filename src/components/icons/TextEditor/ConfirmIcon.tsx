function ConfirmIcon() {
  return (
    <svg
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
        <path fill='currentColor' d='M0 0h24v24H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          d='m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
}

export default ConfirmIcon;
