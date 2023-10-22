import {render, RenderResult} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

interface Builder {
  render(): RenderResult;
  withQueryClientProvider(): this;
}

export class Renderer implements Builder {
  private component: React.ReactElement;

  constructor(component: React.ReactElement) {
    this.component = component;
  }

  render(): RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement> {
    return render(this.component);
  }

  withQueryClientProvider(): this {
    const queryClient = new QueryClient();
    this.component = <QueryClientProvider client={queryClient}>{this.component}</QueryClientProvider>;
    return this;
  }
}