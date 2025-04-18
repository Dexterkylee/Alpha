import React, { SVGProps } from 'react';
import { RadialBarProps } from '../polar/RadialBar';
import { Props as SectorProps } from '../shape/Sector';
export declare function parseCornerRadius(cornerRadius: string | number): number;
export declare function typeGuardSectorProps(option: SVGProps<SVGPathElement>, props: SectorProps): SectorProps;
export interface RadialBarSectorProps extends SectorProps {
    index?: number;
    option: RadialBarProps['activeShape'];
    isActive: boolean;
}
export declare function RadialBarSector(props: RadialBarSectorProps): React.JSX.Element;
