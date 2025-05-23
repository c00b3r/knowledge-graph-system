function StrikethroughtIcon() {
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
          d='M12.15 20q-1.9 0-3.375-1.125T6.65 15.8l2.2-.95q.35 1.2 1.213 1.975.861.775 2.137.775 1.05 0 1.9-.5t.85-1.6q0-.45-.175-.825A2.4 2.4 0 0 0 14.3 14h2.8a4.3 4.3 0 0 1 .25 1.5q0 2.15-1.538 3.325Q14.277 20 12.15 20M2 12v-2h20v2zm10.05-8.15q1.65 0 2.887.812T16.85 7.15l-2.2.975a3 3 0 0 0-.838-1.3Q13.2 6.249 12.1 6.25q-1.025 0-1.7.462-.675.463-.75 1.288h-2.4q.05-1.725 1.363-2.938Q9.925 3.85 12.05 3.85'
          fill='#838790'
        />
      </g>
    </svg>
  );
}

export default StrikethroughtIcon;
