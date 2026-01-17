import * as React from "react";

export class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  state: { hasError: boolean };
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info.componentStack, React.captureOwnerStack());
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
