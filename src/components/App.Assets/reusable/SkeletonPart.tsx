import { Component } from 'react';
import { SkeletonPartProps } from './types';

export class SkeletonPart extends Component<SkeletonPartProps> {
  render(): JSX.Element {
    return <div style={this.props.style} className="skeleton-part"></div>;
  }
}
