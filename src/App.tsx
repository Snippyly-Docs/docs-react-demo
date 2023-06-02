import { useEffect } from "react";
import { VeltSidebarButton, useVeltClient } from '@veltdev/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Tag from './components/tag/Tag';
import { VeltPresence } from "@veltdev/react";

import PencilIcon from './icons/pencil.svg';

const App = () => {

  /**
   * Velt Code Example
   * Initializes the Velt SDK.
   */
  const { client } = useVeltClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('docs-react-demo');

    /**
     * Velt Code Example
     * Feature: Comments (Text mode)
     * Feature: Comments (Streaming mode)
     */
    const commentElement = client.getCommentElement();
    commentElement.enableTextComments();
    commentElement.enableStreamMode();

  }, [client]);

  useEffect(() => {

    if (!client) return;

    client.getPresenceElement().getOnlineUsersOnCurrentDocument().subscribe((users: any) => {
      if (users === null) return;
      if (users.length === 0) {
        const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

        if (isDataReset === null) {
          fetch(
            "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ documentId: 'docs-react-demo' }),
            }
          );
          window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
        }
      }
    });

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <div className={styles['navbar']}>
        <VeltSidebarButton className={styles['sidebar-button']} />
        <VeltPresence />
      </div>
      <div className={styles['content']}>
        <img className={styles['icon']} src={PencilIcon} />
        <h1 suppressContentEditableWarning={true} contentEditable={true}>Project KickOff</h1>

        <br />

        <div className={styles['tag-container']}>
          <Tag bgColor="#3772FF" text="#team-product" />
          <Tag bgColor="#625DF5" text="#q1" />
        </div>

        <br />

        <p suppressContentEditableWarning={true} contentEditable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>

        <br />

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b suppressContentEditableWarning={true} contentEditable={true}>Increase conversion by 5%</b>
        </div>


        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b suppressContentEditableWarning={true} contentEditable={true}>AI feature</b>
        </div>

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b suppressContentEditableWarning={true} contentEditable={true}>Capture the AllSpark</b>
        </div>

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b suppressContentEditableWarning={true} contentEditable={true}>Steal the Declaration of Independence</b>
        </div>

        <br />

        <p suppressContentEditableWarning={true} contentEditable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
      </div>
    </div>
  );
};

export default App;