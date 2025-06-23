function ListIcon() {
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
          d='M9 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2zM5 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 18q0-.824.587-1.413A1.93 1.93 0 0 1 5 16q.824 0 1.412.587Q7 17.176 7 18t-.588 1.413A1.93 1.93 0 0 1 5 20m0-6q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 12q0-.825.587-1.412A1.93 1.93 0 0 1 5 10q.824 0 1.412.588Q7 11.175 7 12t-.588 1.412A1.93 1.93 0 0 1 5 14m0-6q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4q.824 0 1.412.588Q7 5.175 7 6q0 .824-.588 1.412A1.93 1.93 0 0 1 5 8'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default ListIcon;
