import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import * as Icons from './index';

test('render a randomg svg and test width, height and fill attribute', () => {
  const Icon = Object.values(Icons)[0] as React.FC<
  React.SVGProps<SVGSVGElement>
 >;
  const rendered: RenderResult = render(<Icon />);

  const svg = rendered.getByTestId('svg-element');

  expect(svg.getAttribute('width')).toBe('1em');
  expect(svg.getAttribute('height')).toBe('1em');
  expect(svg.getAttribute('fill')).toBe('none');
});
