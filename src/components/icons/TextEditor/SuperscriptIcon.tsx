function SuperscriptIcon() {
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
          d='M19 9V7q0-.424.288-.713A.97.97 0 0 1 20 6h2V5h-3V4h3q.424 0 .712.287Q23 4.576 23 5v1q0 .424-.288.713A.97.97 0 0 1 22 7h-2v1h3v1zM5.875 20l4.625-7.275L6.2 6h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 20H15.45l-3.4-5.425h-.1L8.55 20z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default SuperscriptIcon;
