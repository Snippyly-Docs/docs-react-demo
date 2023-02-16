import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Tag from './components/tag/Tag';
import { SnippylyPresence } from "@snippyly/react";

import PencilIcon from './icons/pencil.svg';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('docs-react-demo');

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <div className={styles['navbar']}>
        <SnippylyPresence />
      </div>
      <div className={styles['content']}>
        <img className={styles['icon']} src={PencilIcon} />
        <h1 contentEditable={true}>Project KickOff</h1>

        <br />

        <div className={styles['tag-container']}>
          <Tag bgColor="#3772FF" text="#team-product" />
          <Tag bgColor="#625DF5" text="#q1" />
        </div>

        <br />

        <p contentEditable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>

        <br />

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b contentEditable={true}>Increase conversion by 5%</b>
        </div>
        

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b contentEditable={true}>AI feature</b>
        </div>

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b contentEditable={true}>Capture the AllSpark</b>
        </div>

        <div className={styles['checkbox-container']}>
          <input type="checkbox"></input>
          <b contentEditable={true}>Steal the Declaration of Independence</b>
        </div>

        <br />
        
        <p contentEditable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
      </div>
    </div>
  );
};

export default App;