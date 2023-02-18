import { useEffect } from "react";
import { SnippylySidebarButton, useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Tag from './components/tag/Tag';
import { SnippylyPresence } from "@snippyly/react";

import PencilIcon from './icons/pencil.svg';

const App = () => {

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('docs-react-demo');

    /**
     * Snippyly Code Example
     * Feature: Comments (Text mode)
     * Feature: Comments (Streaming mode)
     */
    const commentElement = client.getCommentElement();
    commentElement.enableTextComments(true);
    commentElement.enableStreamMode(true);

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <div className={styles['navbar']}>
        <SnippylySidebarButton className={styles['sidebar-button']} />
        <SnippylyPresence containerClass={styles['presence']} />
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