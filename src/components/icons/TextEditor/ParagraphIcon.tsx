function ParagraphIcon() {
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
        <path fill='#D9D9D9' d='M0 0h24v24H0z' />
      </mask>
      <g mask='url(#a)'>
        <path
          d='M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default ParagraphIcon;
