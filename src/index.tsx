import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  SnippylyProvider,
  SnippylyCursor, 
  SnippylyComments, 
  SnippylyCommentsSidebar,
  SnippylyHuddle,
  SnippylyTags,
  SnippylyRecorderControlPanel,
  SnippylyRecorderNotes
} from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Snippyly Code Example
       * Feature: Live Cursors
       * Feature: Comments -- Step #1
       * Feature: Comments Sidebar -- Step #1
       * Feature: Huddle -- Step #1
       * Feature: Tags -- Step #1
       * Feature: Recorder -- Step #1
       */}
      <SnippylyComments />
      <SnippylyCursor />
      <SnippylyCommentsSidebar />
      <SnippylyHuddle />
      <SnippylyTags />
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <App />
    </SnippylyProvider>
);