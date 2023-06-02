import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor, VeltComments, VeltCommentsSidebar } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Velt Code Example
       * Feature: Comments
       * Feature: Comments Sidebar -- Step #1
       * Feature: Live Cursors
       */}
    <VeltComments />
    <VeltCursor />
    <VeltCommentsSidebar />
    <App />
  </VeltProvider>
);