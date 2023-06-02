import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  VeltProvider,
  VeltCursor, 
  VeltComments, 
  VeltCommentsSidebar,
  VeltHuddle,
  VeltTags,
  VeltRecorderControlPanel,
  VeltRecorderNotes
} from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Velt Code Example
       * Feature: Live Cursors
       * Feature: Comments -- Step #1
       * Feature: Comments Sidebar -- Step #1
       * Feature: Huddle -- Step #1
       * Feature: Tags -- Step #1
       * Feature: Recorder -- Step #1
       */}
      <VeltComments />
      <VeltCursor />
      <VeltCommentsSidebar />
      <VeltHuddle />
      <VeltTags />
      <VeltRecorderControlPanel />
      <VeltRecorderNotes />
      <App />
    </VeltProvider>
);