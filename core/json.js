/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2024 Google Inc.
 * https://developers.google.com/blockly/
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

/**
 * @fileoverview JSON serialization for Blockly workspaces.
 * @author your-name@example.com
 */
'use strict';

goog.provide('Blockly.Json');

goog.require('Blockly.Events');
goog.require('Blockly.utils');

/**
 * Encode a workspace as JSON.
 * @param {!Blockly.Workspace} workspace The workspace containing blocks.
 * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
 * @return {!Object} JSON representation of the workspace.
 */
Blockly.Json.workspaceToJson = function(workspace, opt_noId) {
  var json = {
    'type': 'workspace',
    'id': workspace.id,
    'variables': Blockly.Json.variablesToJson(workspace.getAllVariables()),
    'comments': [],
    'blocks': []
  };

  // Add comments
  var comments = workspace.getTopComments(true).filter(function(topComment) {
    return topComment instanceof Blockly.WorkspaceComment;
  });
  for (var i = 0, comment; comment = comments[i]; i++) {
    json.comments.push(Blockly.Json.commentToJson(comment, opt_noId));
  }

  // Add blocks
  var blocks = workspace.getTopBlocks(true);
  for (var i = 0, block; block = blocks[i]; i++) {
    json.blocks.push(Blockly.Json.blockToJson(block, opt_noId));
  }

  return json;
};

/**
 * Encode a list of variables as JSON.
 * @param {!Array.<!Blockly.VariableModel>} variableList List of all variable models.
 * @return {!Array.<!Object>} Array of variable JSON objects.
 */
Blockly.Json.variablesToJson = function(variableList) {
  var variables = [];
  for (var i = 0, variable; variable = variableList[i]; i++) {
    variables.push({
      'name': variable.name,
      'type': variable.type,
      'id': variable.getId(),
      'isLocal': variable.isLocal,
      'isCloud': variable.isCloud
    });
  }
  return variables;
};

/**
 * Encode a block as JSON with coordinates.
 * @param {!Blockly.Block} block The block to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @return {!Object} JSON representation of the block.
 */
Blockly.Json.blockToJson = function(block, opt_noId) {
  var json = {
    'type': block.type,
    'isShadow': block.isShadow()
  };

  if (!opt_noId) {
    json.id = block.id;
  }

  // Add coordinates
  var xy = block.getRelativeToSurfaceXY();
  json.x = Math.round(block.workspace.RTL ? 
    block.workspace.getWidth() - xy.x : xy.x);
  json.y = Math.round(xy.y);

  // Add mutation data
  if (block.mutationToDom) {
    var mutation = block.mutationToDom();
    if (mutation && (mutation.hasChildNodes() || mutation.hasAttributes())) {
      json.mutation = Blockly.Json.domToJson(mutation);
    }
  }

  // Add fields
  json.fields = Blockly.Json.fieldsToJson(block);

  // Add comment
  if (block.comment) {
    json.comment = Blockly.Json.blockCommentToJson(block);
  }

  // Add data
  if (block.data) {
    json.data = block.data;
  }

  // Add inputs
  json.inputs = [];
  for (var i = 0, input; input = block.inputList[i]; i++) {
    if (input.type == Blockly.DUMMY_INPUT) {
      continue;
    }
    
    var inputJson = {
      'name': input.name,
      'type': input.type
    };

    var childBlock = input.connection.targetBlock();
    var shadow = input.connection.getShadowDom();
    
    if (shadow && (!childBlock || !childBlock.isShadow())) {
      inputJson.shadow = Blockly.Json.domToJson(shadow);
    }
    
    if (childBlock) {
      inputJson.block = Blockly.Json.blockToJson(childBlock, opt_noId);
    }

    json.inputs.push(inputJson);
  }

  // Add block properties
  if (block.inputsInlineDefault != block.inputsInline) {
    json.inputsInline = block.inputsInline;
  }
  if (block.isCollapsed()) {
    json.collapsed = true;
  }
  if (block.disabled) {
    json.disabled = true;
  }
  if (!block.isDeletable() && !block.isShadow()) {
    json.deletable = false;
  }
  if (!block.isMovable() && !block.isShadow()) {
    json.movable = false;
  }
  if (!block.isEditable()) {
    json.editable = false;
  }

  // Add next block
  var nextBlock = block.getNextBlock();
  if (nextBlock) {
    json.next = Blockly.Json.blockToJson(nextBlock, opt_noId);
  }

  return json;
};

/**
 * Encode fields of a block as JSON.
 * @param {!Blockly.Block} block The block with fields to encode.
 * @return {!Array.<!Object>} Array of field JSON objects.
 * @private
 */
Blockly.Json.fieldsToJson = function(block) {
  var fields = [];
  for (var i = 0, field; field = block.inputList[i]; i++) {
    for (var j = 0, fieldObj; fieldObj = field.fieldRow[j]; j++) {
      if (fieldObj.name && fieldObj.SERIALIZABLE) {
        var fieldJson = {
          'name': fieldObj.name
        };

        if (fieldObj.referencesVariables()) {
          var variable = fieldObj.getVariable();
          if (variable) {
            fieldJson.type = 'variable';
            fieldJson.value = variable.name;
            fieldJson.id = variable.getId();
            fieldJson.variableType = variable.type;
          }
        } else {
          fieldJson.value = fieldObj.getValue();
        }

        fields.push(fieldJson);
      }
    }
  }
  return fields;
};

/**
 * Encode a block comment as JSON.
 * @param {!Blockly.Block} block The block containing the comment.
 * @return {!Object} JSON representation of the comment.
 * @private
 */
Blockly.Json.blockCommentToJson = function(block) {
  var commentText = block.getCommentText();
  if (!commentText) {
    return null;
  }

  var json = {
    'text': commentText
  };

  if (typeof block.comment == 'object') {
    json.id = block.comment.id;
    json.pinned = block.comment.isVisible();
    
    var hw;
    if (block.comment instanceof Blockly.ScratchBlockComment) {
      hw = block.comment.getHeightWidth();
    } else {
      hw = block.comment.getBubbleSize();
    }
    json.h = hw.height;
    json.w = hw.width;
    
    var xy = block.comment.getXY();
    json.x = Math.round(block.workspace.RTL ? 
      block.workspace.getWidth() - xy.x - hw.width : xy.x);
    json.y = xy.y;
    json.minimized = block.comment.isMinimized();
  }

  return json;
};

/**
 * Encode a workspace comment as JSON.
 * @param {!Blockly.WorkspaceComment} comment The comment to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the comment ID.
 * @return {!Object} JSON representation of the comment.
 */
Blockly.Json.commentToJson = function(comment, opt_noId) {
  var json = {
    'text': comment.getText(),
    'x': Math.round(comment.getXY().x),
    'y': Math.round(comment.getXY().y),
    'h': comment.getHeight(),
    'w': comment.getWidth()
  };

  if (!opt_noId) {
    json.id = comment.id;
  }

  if (comment.isMinimized()) {
    json.minimized = true;
  }

  return json;
};

/**
 * Convert DOM element to JSON.
 * @param {!Element} dom The DOM element to convert.
 * @return {!Object} JSON representation of the DOM element.
 * @private
 */
Blockly.Json.domToJson = function(dom) {
  var json = {
    'tagName': dom.tagName.toLowerCase()
  };

  // Add attributes
  if (dom.attributes && dom.attributes.length > 0) {
    json.attributes = {};
    for (var i = 0; i < dom.attributes.length; i++) {
      var attr = dom.attributes[i];
      json.attributes[attr.name] = attr.value;
    }
  }

  // Add text content
  if (dom.textContent && dom.textContent.trim()) {
    json.textContent = dom.textContent;
  }

  // Add children
  if (dom.children && dom.children.length > 0) {
    json.children = [];
    for (var i = 0; i < dom.children.length; i++) {
      json.children.push(Blockly.Json.domToJson(dom.children[i]));
    }
  }

  return json;
};

/**
 * Convert workspace JSON to workspace.
 * @param {!Object} json JSON representation of the workspace.
 * @param {!Blockly.Workspace} workspace The workspace to load into.
 * @return {Array.<string>} Array of new block IDs.
 */
Blockly.Json.jsonToWorkspace = function(json, workspace) {
  if (json instanceof Blockly.Workspace) {
    var swap = json;
    json = workspace;
    workspace = swap;
    console.warn('Deprecated call to Blockly.Json.jsonToWorkspace, ' +
                 'swap the arguments.');
  }

  var newBlockIds = [];
  Blockly.Field.startCache();
  
  var existingGroup = Blockly.Events.getGroup();
  if (!existingGroup) {
    Blockly.Events.setGroup(true);
  }

  // Disable workspace resizes as an optimization.
  if (workspace.setResizesEnabled) {
    workspace.setResizesEnabled(false);
  }

  try {
    // Load variables
    if (json.variables) {
      Blockly.Json.jsonToVariables(json.variables, workspace);
    }

    // Load comments
    if (json.comments) {
      for (var i = 0, comment; comment = json.comments[i]; i++) {
        Blockly.Json.jsonToComment(comment, workspace);
      }
    }

    // Load blocks
    if (json.blocks) {
      for (var i = 0, block; block = json.blocks[i]; i++) {
        var newBlock = Blockly.Json.jsonToBlock(block, workspace);
        if (newBlock) {
          newBlockIds.push(newBlock.id);
        }
      }
    }
  } finally {
    Blockly.Field.stopCache();
    if (!existingGroup) {
      Blockly.Events.setGroup(false);
    }
    if (workspace.setResizesEnabled) {
      workspace.setResizesEnabled(true);
    }
  }

  return newBlockIds;
};

/**
 * Convert JSON variables to workspace variables.
 * @param {!Array.<!Object>} variablesJson Array of variable JSON objects.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @private
 */
Blockly.Json.jsonToVariables = function(variablesJson, workspace) {
  for (var i = 0, variable; variable = variablesJson[i]; i++) {
    workspace.createVariable(
      variable.name,
      variable.type,
      variable.id,
      variable.isLocal,
      variable.isCloud
    );
  }
};

/**
 * Convert JSON comment to workspace comment.
 * @param {!Object} commentJson JSON representation of the comment.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @private
 */
Blockly.Json.jsonToComment = function(commentJson, workspace) {
  var comment = workspace.createComment(commentJson.text, commentJson.id);
  comment.moveBy(commentJson.x, commentJson.y);
  if (commentJson.minimized) {
    comment.setMinimized(true);
  }
};

/**
 * Convert JSON block to workspace block.
 * @param {!Object} blockJson JSON representation of the block.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {!Blockly.Block} The created block.
 * @private
 */
Blockly.Json.jsonToBlock = function(blockJson, workspace) {
  var block = workspace.newBlock(blockJson.type, blockJson.id);

  // Set position
  if (blockJson.x !== undefined && blockJson.y !== undefined) {
    block.moveBy(blockJson.x, blockJson.y);
  }

  // Set mutation
  if (blockJson.mutation && block.domToMutation) {
    var mutationDom = Blockly.Json.jsonToDom(blockJson.mutation);
    block.domToMutation(mutationDom);
  }

  // Set fields
  if (blockJson.fields) {
    for (var i = 0, field; field = blockJson.fields[i]; i++) {
      var fieldObj = block.getField(field.name);
      if (fieldObj) {
        if (field.type === 'variable') {
          var variable = workspace.getVariableById(field.id) ||
                        workspace.createVariable(field.value, field.variableType, field.id);
          fieldObj.setValue(variable.getId());
        } else {
          fieldObj.setValue(field.value);
        }
      }
    }
  }

  // Set comment
  if (blockJson.comment) {
    block.setCommentText(blockJson.comment.text, blockJson.comment.id);
    if (block.comment && block.comment.setVisible) {
      block.comment.setVisible(blockJson.comment.pinned);
    }
  }

  // Set data
  if (blockJson.data) {
    block.data = blockJson.data;
  }

  // Set block properties
  if (blockJson.inputsInline !== undefined) {
    block.setInputsInline(blockJson.inputsInline);
  }
  if (blockJson.collapsed) {
    block.setCollapsed(true);
  }
  if (blockJson.disabled) {
    block.setDisabled(true);
  }
  if (blockJson.deletable !== undefined) {
    block.setDeletable(blockJson.deletable);
  }
  if (blockJson.movable !== undefined) {
    block.setMovable(blockJson.movable);
  }
  if (blockJson.editable !== undefined) {
    block.setEditable(blockJson.editable);
  }

  // Set inputs and children
  if (blockJson.inputs) {
    for (var i = 0, input; input = blockJson.inputs[i]; i++) {
      var inputObj = block.getInput(input.name);
      if (inputObj && input.block) {
        var childBlock = Blockly.Json.jsonToBlock(input.block, workspace);
        if (childBlock) {
          inputObj.connection.connect(childBlock.outputConnection);
        }
      }
    }
  }

  // Set next block
  if (blockJson.next) {
    var nextBlock = Blockly.Json.jsonToBlock(blockJson.next, workspace);
    if (nextBlock) {
      block.nextConnection.connect(nextBlock.previousConnection);
    }
  }

  return block;
};

/**
 * Convert JSON to DOM element.
 * @param {!Object} json JSON representation of the DOM element.
 * @return {!Element} DOM element.
 * @private
 */
Blockly.Json.jsonToDom = function(json) {
  var element = document.createElement(json.tagName);

  // Set attributes
  if (json.attributes) {
    for (var attrName in json.attributes) {
      element.setAttribute(attrName, json.attributes[attrName]);
    }
  }

  // Set text content
  if (json.textContent) {
    element.textContent = json.textContent;
  }

  // Set children
  if (json.children) {
    for (var i = 0, child; child = json.children[i]; i++) {
      element.appendChild(Blockly.Json.jsonToDom(child));
    }
  }

  return element;
};

/**
 * Convert workspace to JSON string.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
 * @return {string} JSON string representation of the workspace.
 */
Blockly.Json.workspaceToText = function(workspace, opt_noId) {
  var json = Blockly.Json.workspaceToJson(workspace, opt_noId);
  return JSON.stringify(json, null, 2);
};

/**
 * Convert JSON string to workspace.
 * @param {string} text JSON string representation of the workspace.
 * @param {!Blockly.Workspace} workspace The workspace to load into.
 * @return {Array.<string>} Array of new block IDs.
 */
Blockly.Json.textToWorkspace = function(text, workspace) {
  var json = JSON.parse(text);
  return Blockly.Json.jsonToWorkspace(json, workspace);
};

/**
 * Clear the given workspace then decode JSON and create blocks on the workspace.
 * @param {!Object} json JSON representation of the workspace.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {Array.<string>} Array containing new block IDs.
 */
Blockly.Json.clearWorkspaceAndLoadFromJson = function(json, workspace) {
  workspace.setResizesEnabled(false);
  workspace.setToolboxRefreshEnabled(false);
  workspace.clear();
  var blockIds = Blockly.Json.jsonToWorkspace(json, workspace);
  workspace.setResizesEnabled(true);
  workspace.setToolboxRefreshEnabled(true);
  return blockIds;
};

// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
  goog.global['Blockly'] = {};
}
goog.global['Blockly']['Json'] = Blockly.Json;
