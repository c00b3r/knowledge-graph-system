function CancelIcon() {
  return (
    <svg
      viewBox='0 0 25 25'
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
        width={25}
        height={25}
      >
          <path fill='currentColor' d='M.216.039h24v24h-24z' />
      </mask>
      <g mask='url(#a)'>
        <path
          d='m6.616 19.04-1.4-1.4 5.6-5.6-5.6-5.6 1.4-1.4 5.6 5.6 5.6-5.6 1.4 1.4-5.6 5.6 5.6 5.6-1.4 1.4-5.6-5.6z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
}

export default CancelIcon;
