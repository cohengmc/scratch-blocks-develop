'use strict';

goog.provide('Blockly.Blocks.weightlifting_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['back_squat'] = {
  /**
   * Block for back squat exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "back_squat",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/weightlifting/back_squat.svg",
          "width": 40,
          "height": 40,
          "alt": "back squat Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#dde3e5",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#6c7d7d",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};

Blockly.Blocks['bench_press'] = {
  /**
   * Block for bench press exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "bench_press",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/weightlifting/bench_press.svg",
          "width": 40,
          "height": 40,
          "alt": "bench press Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#dde3e5",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#6c7d7d",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};

Blockly.Blocks['deadlift'] = {
  /**
   * Block for deadlift exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "deadlift",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/weightlifting/deadlift.svg",
          "width": 40,
          "height": 40,
          "alt": "deadlift Exercise",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#dde3e5",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#6c7d7d",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};
