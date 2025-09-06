'use strict';

goog.provide('Blockly.Blocks.activities_blocks');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['baseball'] = {
  /**
   * Block for baseball (used for shadow).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "baseball",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/baseball.svg",
          "width": 40,
          "height": 40,
          "alt": "Baseball",
        },
        
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      // "colour": Blockly.Colours.looks.primary,
      "colour": "#fe4d65",
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": "#e2362f",
      "colourQuaternary": Blockly.Colours.looks.quaternary
    });
  }
};

Blockly.Blocks['biking'] = {
    /**
     * Block for biking (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "biking",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/biking.svg",
            "width": 40,
            "height": 40,
            "alt": "biking",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['hiking'] = {
    /**
     * Block for hiking (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "hiking",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/hiking.svg",
            "width": 40,
            "height": 40,
            "alt": "hiking",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['pilates'] = {
    /**
     * Block for pilates (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "pilates",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/pilates.svg",
            "width": 40,
            "height": 40,
            "alt": "pilates",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['running'] = {
    /**
     * Block for running (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "running",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/run.svg",
            "width": 40,
            "height": 40,
            "alt": "running",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['surfing'] = {
    /**
     * Block for surfing (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "surfing",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/surfing.svg",
            "width": 40,
            "height": 40,
            "alt": "surfing",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['yoga'] = {
    /**
     * Block for yoga (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "yoga",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/yoga.svg",
            "width": 40,
            "height": 40,
            "alt": "yoga",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };

  Blockly.Blocks['dancing'] = {
    /**
     * Block for dancing (used for shadow).
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "dancing",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": Blockly.mainWorkspace.options.pathToMedia + "icons/exercise_icons/activities/dancing.svg",
            "width": 40,
            "height": 40,
            "alt": "dancing",
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "category": Blockly.Categories.looks,
        // "colour": Blockly.Colours.looks.primary,
        "colour": "#fe4d65",
        "colourSecondary": Blockly.Colours.event.secondary,
        "colourTertiary": "#e2362f",
        "colourQuaternary": Blockly.Colours.looks.quaternary
      });
    }
  };
