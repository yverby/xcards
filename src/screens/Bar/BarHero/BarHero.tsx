import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu, IconReload } from '@tabler/icons-react';

import { Hero } from '@src/screens/shared';
import { useCardsStatus } from '@src/stores/cards';
import { useSettingsStore } from '@src/stores/settings';

export function BarHero() {
  const [opened, { open, close }] = useDisclosure(false);

  const { hasList, hasFinish } = useCardsStatus();
  const resetSettings = useSettingsStore((state) => state.resetSettings);

  const reset = () => {
    close();
    resetSettings();
  };

  return (
    <>
      {(hasList || hasFinish) && (
        <Button variant="primary" onClick={open}>
          <IconMenu size={20} />
        </Button>
      )}
      <Modal opened={opened} onClose={close}>
        <Hero>
          <Button variant="secondary" onClick={reset}>
            <IconReload size={20} />
          </Button>
        </Hero>
      </Modal>
    </>
  );
}
