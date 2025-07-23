'use strict';

goog.provide('Blockly.Blocks.handstands_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['exercise_chest_to_wall'] = {
  /**
   * Block for chest to wall handstand exercise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "exercise_chest_to_wall",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/handstands/chest_to_wall.svg",
          "width": 50,
          "height": 50,
          "alt": "Chest to Wall Handstand",
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#CF63CF",
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};

Blockly.Blocks['exercise_back_to_wall'] = {
  /**
   * Block for back to wall handstand exercise.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "exercise_back_to_wall",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/handstands/back_to_wall.svg",
          "width": 50,
          "height": 50,
          "alt": "Back to Wall Handstand",
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#CF63CF",
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
}; 