import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

enum ETab {
  screenshot = 'Screenshot',
  screenRecording = 'ScreenRecording',
}

interface ITabsProps {
  active: ETab;
  setTab: (tab: ETab) => void;
  list: ETab[];
}

const Tabs = React.memo((props: ITabsProps) => {
  const { active, setTab, list } = props;

  return (
    <div className={styles.tabs}>
      {list.map((item) => (
        <div
          key={item}
          onClick={setTab.bind(null, item)}
          className={`${styles.tab} ${active === item && styles.tabActive}`}>
          {item}
        </div>
      ))}
    </div>
  );
});

interface IHotKey {
  hotkeys: string[];
  onPress: () => void;
}

const HOTKEY_DESC = 'Please press any key to set hotkey';

const HotKey = React.memo((props: IHotKey) => {
  const { hotkeys, onPress } = props;
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (isEdit) {
      onPress();
    }
  }, [isEdit, onPress]);

  useEffect(() => {
    setIsEdit(false);
  }, [hotkeys]);

  return (
    <div
      onClick={setIsEdit.bind(null, !isEdit)}
      className={`${styles.hotKey} ${isEdit && styles.hotKeyEdit}`}>
      {isEdit
        ? HOTKEY_DESC
        : hotkeys.reduce((a, b) => {
            return a + '+' + b;
          })}
    </div>
  );
});

const Screenshot = React.memo(() => {
  // TODO 动态改变
  const hotKeys = ['command', 'F4'];

  const handlePress = () => {
    // TODO
  };

  return (
    <div className={styles.overview}>
      Press <HotKey onPress={handlePress} hotkeys={hotKeys} /> to take a
      screenshot
    </div>
  );
});

const ScreenRecording = React.memo(() => {
  const hotKeys = ['command', 'F5'];

  const handlePress = () => {
    // TODO hehe
  };

  return (
    <div className={styles.overview}>
      Press <HotKey onPress={handlePress} hotkeys={hotKeys} /> to record the
      screen
    </div>
  );
});

const TabList = [ETab.screenshot, ETab.screenRecording];

const Content = React.memo(() => {
  const [activeTab, setTab] = useState(ETab.screenshot);

  return (
    <div className={styles.content}>
      <Tabs setTab={setTab} list={TabList} active={activeTab} />
      {activeTab === ETab.screenshot ? <Screenshot /> : <ScreenRecording />}
    </div>
  );
});

export default Content;
