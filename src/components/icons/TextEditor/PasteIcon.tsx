function PasteIcon() {
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
          d='m18 21-1.4-1.425L18.175 18H12v-2h6.175L16.6 14.4 18 13l4 4zm3-10h-2V5h-2v3H7V5H5v14h5v2H5q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h4.175q.275-.875 1.075-1.437A2.98 2.98 0 0 1 12 1a3 3 0 0 1 1.787.563q.788.563 1.063 1.437H19q.824 0 1.413.587Q21 4.176 21 5zm-9-6q.424 0 .713-.287A.97.97 0 0 0 13 4a.97.97 0 0 0-.287-.712A.97.97 0 0 0 12 3a.97.97 0 0 0-.713.288A.97.97 0 0 0 11 4q0 .424.287.713Q11.576 5 12 5'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default PasteIcon;
