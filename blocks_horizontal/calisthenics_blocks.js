'use strict';

goog.provide('Blockly.Blocks.calisthenics_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['exercise_pull_up'] = {
  /**
   * Block for pull up exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "exercise_pull_up",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/pull_up.svg",
          "width": 40,
          "height": 40,
          "alt": "Pull Up Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#4C97FF",
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};

Blockly.Blocks['exercise_push_up'] = {
  /**
   * Block for push up exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "exercise_push_up",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/push_up.svg",
          "width": 40,
          "height": 40,
          "alt": "Push Up Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#4C97FF",
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};