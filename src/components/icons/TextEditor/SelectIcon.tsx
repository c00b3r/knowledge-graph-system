function SelectIcon() {
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
          d='M5 19v2q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19zm-2-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm2-4H3q0-.824.587-1.412A1.93 1.93 0 0 1 5 3zm2 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 14h2q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3q.824 0 1.413.587Q21 4.176 21 5z'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default SelectIcon;
