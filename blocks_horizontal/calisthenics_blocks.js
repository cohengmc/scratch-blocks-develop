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

Blockly.Blocks['exercise_dips'] = {
  /**
   * Block for dips exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "exercise_dips",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/dips.svg",
          "width": 40,
          "height": 40,
          "alt": "Dips Exercise",
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

Blockly.Blocks['bw_squat'] = {
  /**
   * Block for body weight squat exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "bw_squat",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/bw_squat.svg",
          "width": 40,
          "height": 40,
          "alt": "body weight squat Exercise",
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

Blockly.Blocks['front_lever'] = {
  /**
   * Block for front lever exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "front_lever",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/front_lever.svg",
          "width": 40,
          "height": 40,
          "alt": "Front Lever Exercise",
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

Blockly.Blocks['muscle_up'] = {
  /**
   * Block for muscle up exercise (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "muscle_up",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/calisthenics/muscle_up.svg",
          "width": 40,
          "height": 40,
          "alt": "muscle up Exercise",
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