import React, { FC, SVGProps } from 'react';
import * as Icons from '../index';

const iconNames = Object.keys(Icons);
const iconComponents = Object.values(Icons);

export default {
  title: 'Icons',
  component: Icons,
  args: {
    color: '#323232',
    fontSize: '24px',
  },
};

export const Icon = (args) => {
  const wrapperStyle = {
    display: 'grid',
    alignItems: 'center',
    gridGap: '2rem',
    marginTop: '2rem',
    gridTemplateColumns: 'repeat(8, minmax(120px, 1fr))',
    div: {
      textAlign: 'center',
    },
  };
  const iconStyle = {
    fontSize: args.fontSize,
    color: args.color,
  };
  return (
    <div style={wrapperStyle}>
      {iconComponents.map((Icon: FC<SVGProps<SVGSVGElement>>, key: number) => (
        <div key={key}>
          <Icon {...iconStyle} />
          <p>{iconNames[key]}</p>
        </div>
      ))}
    </div>
  );
};
