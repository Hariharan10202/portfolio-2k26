import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="h-full flex items-center justify-center flex-col gap-2">
            <span className="text-6xl">⊕</span>
            <span className="western-subtitle text-[#c2672a] text-xs tracking-widest">THE COMPASS</span>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
