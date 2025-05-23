function ItalicIcon() {
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
        <path d='M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19z' fill='#838790' />
      </g>
    </svg>
  );
}

export default ItalicIcon;
