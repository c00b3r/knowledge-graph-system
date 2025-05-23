function SubscriptIcon() {
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
          d='M19 20v-2q0-.424.288-.712A.97.97 0 0 1 20 17h2v-1h-3v-1h3q.424 0 .712.287.288.288.288.713v1q0 .424-.288.712A.97.97 0 0 1 22 18h-2v1h3v1zM5.875 18l4.625-7.275L6.2 4h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 18H15.45l-3.4-5.425h-.1L8.55 18z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default SubscriptIcon;
