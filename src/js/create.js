/** **************** ABOUT THIS MODULE *********************

This module includes methods that are called by different
scenes, methods such as create a text, create a background,
create buttons, create cursors and set music configuration.

The idea of this module is to avoid repeating code and make
it easier to read and maintain

/******************************************************** */

const create = (() => {
  const text = (scene, titlePosX, titlePosY, text, fontSize) => {
    scene.creditsTitle = scene.add.text(titlePosX, titlePosY, text, {
      fontSize,
    });
    scene.creditsTitle.setOrigin(0.5, 0);
  };
  const background = (scene, sceneBackground) => {
    const background = scene.add.tileSprite(
      0,
      0,
      scene.game.config.width,
      scene.game.config.height,
      sceneBackground,
    );
    background.setOrigin(0, 0);
    return background;
  };

  const musicConfiguration = (scene, audioID, volumeLevel = 1) => {
    scene.music = scene.sound.add(audioID);
    scene.musicConfig = {
      mute: false,
      volume: volumeLevel,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    scene.music.play(scene.musicConfig);
  };

  const button = (scene, buttonPosX, buttonPosY, buttonText, textSize) => {
    const button = scene.add.text(buttonPosX, buttonPosY, buttonText, {
      fontSize: textSize,
    });
    button.setOrigin(0.5, 0);
    button.setInteractive();
    return button;
  };

  const cursors = (scene) => scene.input.keyboard.createCursorKeys();
  return {
    text,
    background,
    musicConfiguration,
    cursors,
    button,
  };
})();

export default create;
