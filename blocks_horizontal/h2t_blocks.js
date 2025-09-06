'use strict';

goog.provide('Blockly.Blocks.h2t_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['toe_touch'] = {
  /**
   * Block for toe touch exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "toe_touch",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/h2t/toe_touch.svg",
          "width": 40,
          "height": 40,
          "alt": "toe touch Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#2a7b30",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#25c059",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};
