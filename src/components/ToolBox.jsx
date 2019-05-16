import React from 'react';
import Blockly from 'node-blockly/browser';
import '../css/Blockly.css'

class ToolBox extends React.Component {
  componentDidMount() {
    // Add Custom Blocks
    Blockly.Blocks['string_length'] = {
      init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    // =========== Logic Circuit Blocks ============
    // OR
    Blockly.Blocks['logic_circuit_or'] = {
      init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.appendDummyInput('VALUE')
        .appendField('OR');    
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic OR output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    // AND
    Blockly.Blocks['logic_circuit_and'] = {
      init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.appendDummyInput('VALUE')
        .appendField('AND');    
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic AND output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    // XOR
    Blockly.Blocks['logic_circuit_xor'] = {
      init: function() {
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.appendDummyInput('VALUE')
        .appendField('XOR');    
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic XOR output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
  }
  render() {
    return (
      <div className="toolbox">
        <xml id="toolbox">
          {/* カテゴリごとにラベルをつけれる */}
          <category name="Control" colour="210">
            <block type="controls_if"></block>
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
          </category>
          <category name="Logic" colour="120">
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Math" colour="230">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
          </category>
          <category name="Text" colour="400">
            <block type="text"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" colour="330" custom="VARIABLE"></category>
          <category name="Functions" colour="290" custom="PROCEDURE"></category>
          {/* 境界線 */}
          <sep gap="8"></sep>
          <category name="LogicCircuit" colour="220">
            <block type="logic_circuit_or"></block>
            <block type="logic_circuit_and"></block>
            <block type="logic_circuit_xor"></block>
          </category>
          <category name="Custom" colour="350">
            <block type="string_length"></block>
          </category>
        </xml>
      </div>
    )
  }
}

export default ToolBox;