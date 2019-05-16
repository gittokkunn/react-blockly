import React from 'react';
import Blockly from 'node-blockly/browser';
import '../css/Blockly.css'

class ToolBox extends React.Component {
  componentDidMount() {
    // =========== Logic Circuit Blocks ============
    // OR
    Blockly.Blocks['logic_circuit_or'] = {
      init: function() {
        this.appendValueInput('InputA')
            .setCheck('Number');
        this.appendDummyInput('Text')
            .appendField('OR');    
        this.appendValueInput('InputB')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic OR output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    Blockly.JavaScript['logic_circuit_or'] = function(block) {
      // Search the text for a substring.
      var inputA = Blockly.JavaScript.valueToCode(block, 'InputA',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      var inputB = Blockly.JavaScript.valueToCode(block, 'InputB',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      return [inputA + ' | ' + inputB, Blockly.JavaScript.ORDER_BITWISE_OR];
    };
    // AND
    Blockly.Blocks['logic_circuit_and'] = {
      init: function() {
        this.appendValueInput('InputA')
            .setCheck('Number');
        this.appendDummyInput('Text')
        .appendField('AND');    
        this.appendValueInput('InputB')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic AND output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    Blockly.JavaScript['logic_circuit_and'] = function(block) {
      // Search the text for a substring.
      var inputA = Blockly.JavaScript.valueToCode(block, 'InputA',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      var inputB = Blockly.JavaScript.valueToCode(block, 'InputB',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      return [inputA + ' & ' + inputB, Blockly.JavaScript.ORDER_BITWISE_AND];
    };
    // XOR
    Blockly.Blocks['logic_circuit_xor'] = {
      init: function() {
        this.appendValueInput('InputA')
            .setCheck('Number');
        this.appendDummyInput('Text')
        .appendField('XOR');    
        this.appendValueInput('InputB')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns logistic XOR output.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    Blockly.JavaScript['logic_circuit_xor'] = function(block) {
      // Search the text for a substring.
      var inputA = Blockly.JavaScript.valueToCode(block, 'InputA',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      var inputB = Blockly.JavaScript.valueToCode(block, 'InputB',
      Blockly.JavaScript.ORDER_ATOMIC) || '0';
      return [inputA + ' ^ ' + inputB, Blockly.JavaScript.ORDER_BITWISE_XOR];
    };
    // API Access
    // http_template
    Blockly.Blocks['http_template'] = {
      init: function() {
        this.setPreviousStatement(true); 
        this.setNextStatement(true); 
        let options = [['GET', 'GET'], ['POST', 'POST'], ['DELETE', 'DELETE']];
        this.appendDummyInput('Http')
            .appendField('Http')
            .appendField(new Blockly.FieldDropdown(options), 'METHOD');
        this.appendDummyInput('Url')
            .appendField('https://twitter.api/')
            .appendField(new Blockly.FieldTextInput('hoge'), 'PATH');
        this.appendDummyInput('Params')
            .appendField('Params')
            .appendField(new Blockly.FieldTextInput('params'), 'PARAMS');
        this.setColour(160);
        this.setTooltip('Returns twitter api request.');
        // this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
      }
    };
    Blockly.JavaScript['http_template'] = function(block) {
      // Search the text for a substring.
      let method = block.getFieldValue('METHOD') || '';
      let path = block.getFieldValue('PATH') || '';
      let params = block.getFieldValue('PARAMS') || '';
      return `
const request = new XMLHttpRequest();
request.open('${method}', 'https://twitter.api/${path}?params=${params}');
request.addEventListener("load", (event) => {
  window.alert(event.target.status);
  window.alert(event.target.responseText);
});
request.addEventListener("error", () => {
  window.alert("Network Error!");
});
request.send();
`
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
          <category name="API" colour="210">
            <block type="http_template"></block>
          </category>
        </xml>
      </div>
    )
  }
}

export default ToolBox;