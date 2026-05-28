"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center p-8 min-h-[300px]">
          <Card className="max-w-md w-full border-destructive/30 bg-destructive/5">
            <CardContent className="pt-6 text-center space-y-4">
              <h2 className="text-xl font-bold text-destructive">Something went wrong</h2>
              <p className="text-sm text-muted-foreground">
                An error occurred while loading this section. Please try reloading the page.
              </p>
              <Button
                variant="outline"
                className="border-destructive/20 hover:bg-destructive/10 hover:text-destructive"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
