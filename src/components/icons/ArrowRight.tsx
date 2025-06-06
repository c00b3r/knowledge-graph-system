function ArrowRight() {
  return (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
        <path d='M12.6 12 8 7.4 9.4 6l6 6-6 6L8 16.6z' fill='#838790' />
      </g>
    </svg>
  );
}

export default ArrowRight;
