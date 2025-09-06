'use strict';

goog.provide('Blockly.Blocks.atg_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['atg_lunge'] = {
  /**
   * Block for atg lunge exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "atg_lunge",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/atg/lunge.svg",
          "width": 40,
          "height": 40,
          "alt": "ATG Lunge Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#24c159",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#209738",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};
