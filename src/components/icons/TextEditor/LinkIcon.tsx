function LinkIcon() {
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
          d='M11 17H7q-2.074 0-3.537-1.463T2 12q0-2.075 1.463-3.537Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875A2.9 2.9 0 0 0 20 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.462 3.537Q19.074 17 17 17z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default LinkIcon;
