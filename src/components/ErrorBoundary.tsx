import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF7FC] text-[#1A0B26] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 bg-white border border-[#705EFF]/20 shadow-xl rounded-sm">
            <span className="font-cursive text-3xl text-[#FF6082] block mb-2">
              Royal Beauty Hub
            </span>
            <h2 className="font-serif text-2xl text-[#1A0B26] mb-3 font-semibold">
              Something went wrong
            </h2>
            <p className="text-xs text-[#7A698F] mb-6 leading-relaxed">
              We encountered an unexpected issue while preparing the view. Click below to refresh your experience.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-3 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold rounded-sm cursor-pointer shadow-md hover:opacity-95 transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
