/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox JSON.
 */

Blockly.Blocks.defaultToolbox = {
  "kind": "categoryToolbox",
  "contents": [

    {
      "kind": "category",
      "name": "Handstands",
      "id": "handstands",
      "colour": "#CF63CF",
      "secondaryColour": "#6c2c95",
      "contents": [{
          "kind": "block",
          "type": "exercise_chest_to_wall",
          "inputs": {
            "DURATION": {
              "shadow": {
                "type": "math_positive_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "exercise_back_to_wall",
          "inputs": {
            "DURATION": {
              "shadow": {
                "type": "math_positive_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Calisthenics",
      "id": "calisthenics",
      "colour": "#4C97FF",
      "secondaryColour": "#3373CC",
      "contents": [{
          "kind": "block",
          "type": "exercise_pull_up",
          "inputs": {
            "DURATION": {
              "shadow": {
                "type": "math_positive_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "exercise_push_up",
          "inputs": {
            "DURATION": {
              "shadow": {
                "type": "math_positive_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Events",
      "id": "events",
      "colour": "#FFBF00",
      "secondaryColour": "#E6AC00",
      "contents": [{
          "kind": "block",
          "type": "event_whenflagclicked"
        },
        {
          "kind": "block",
          "type": "event_whenbroadcastreceived",
          "inputs": {
            "CHOICE": {
              "shadow": {
                "type": "dropdown_whenbroadcast",
                "fields": {
                  "CHOICE": "blue"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "event_broadcast",
          "inputs": {
            "CHOICE": {
              "shadow": {
                "type": "dropdown_broadcast",
                "fields": {
                  "CHOICE": "blue"
                }
              }
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Control",
      "id": "control",
      "colour": "#FFAB19",
      "secondaryColour": "#CF8B17",
      "contents": [{
          "kind": "block",
          "type": "control_forever"
        },
        {
          "kind": "block",
          "type": "control_repeat",
          "inputs": {
            "TIMES": {
              "shadow": {
                "type": "math_whole_number",
                "fields": {
                  "NUM": "4"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "control_stop"
        },
        {
          "kind": "block",
          "type": "control_wait",
          "inputs": {
            "DURATION": {
              "shadow": {
                "type": "math_positive_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        }
      ]
    },
  ]
};

Blockly.Blocks.defaultToolboxSimple = {
  "kind": "flyoutToolbox",
  "contents": [{
      "kind": "block",
      "type": "event_whenflagclicked"
    },
    {
      "kind": "block",
      "type": "event_whenbroadcastreceived",
      "inputs": {
        "CHOICE": {
          "shadow": {
            "type": "dropdown_whenbroadcast",
            "fields": {
              "CHOICE": "blue"
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "event_broadcast",
      "inputs": {
        "CHOICE": {
          "shadow": {
            "type": "dropdown_broadcast",
            "fields": {
              "CHOICE": "blue"
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "control_forever"
    },
    {
      "kind": "block",
      "type": "control_repeat",
      "inputs": {
        "TIMES": {
          "shadow": {
            "type": "math_whole_number",
            "fields": {
              "NUM": "4"
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "control_stop"
    },
    {
      "kind": "block",
      "type": "control_wait",
      "inputs": {
        "DURATION": {
          "shadow": {
            "type": "math_positive_number",
            "fields": {
              "NUM": "1"
            }
          }
        }
      }
    }
  ]
};
