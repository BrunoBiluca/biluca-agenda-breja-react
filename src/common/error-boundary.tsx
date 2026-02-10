import { isStandalone } from "@app/testing/standalone-mode/standalone-mode";
import { ExternalError } from "@lib/external-error";
import * as React from "react";

export class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  state: { hasError: boolean; allowRetry?: boolean };
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, allowRetry: error instanceof ExternalError };
  }

  componentDidCatch(error: any, info: any) {
    if (isStandalone()) {
      console.log(error, info.componentStack, React.captureOwnerStack());
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {this.props.fallback}
          {this.state.allowRetry ? (
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
              onClick={() => this.setState({ hasError: false })}
            >
              Retry
            </button>
          ) : (
            <span>
              Esse serviço está indisponível no momento, por favor contate o
              suporte caso necessário.
            </span>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
