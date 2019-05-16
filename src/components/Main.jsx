import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Blockly from 'node-blockly/browser';
import ToolBox from './ToolBox';
import hljs from 'highlight.js'
import '../css/Blockly.css'
import '../css/default.css'

let workspace = {}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.renderBlocklyArea = this.renderBlocklyArea.bind(this);
    this.resizeBlocklyArea = this.resizeBlocklyArea.bind(this);
    this.runScript = this.runScript.bind(this);
  }
  componentDidMount() {
    this.renderBlocklyArea()
    this.resizeBlocklyArea()
  }
  renderBlocklyArea() {
    let blocklyDiv = document.getElementById('blocklyDiv');
    // render Blockly Area
    workspace = Blockly.inject(blocklyDiv,
        {toolbox: document.getElementById('toolbox')});
    workspace.addChangeListener(this.updateCode);
  }
  resizeBlocklyArea() {
    let blocklyArea = document.getElementById('blocklyArea');
    let blocklyDiv = document.getElementById('blocklyDiv');
    // render Blockly Area
    let onresize = function(e) {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      let element = blocklyArea;
      let x = 0;
      let y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      // Position blocklyDiv over blocklyArea.
      blocklyDiv.style.left = x + 'px';
      blocklyDiv.style.top = y + 'px';
      blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
      blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
      Blockly.svgResize(workspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);
  }
  updateCode(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').innerHTML = 
      hljs.highlightAuto(code, ['js']).value || '';
  }
  runScript() {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }  
  }
  render() {
    return (
      <div className="main">
        <button 
          className="runButton" 
          type="button" 
          name="runButton" 
          value="aaa"
          onClick={this.runScript}
        >
          RUN
        </button>
        <div className="main-content">
          <div id="blocklyArea">        
            <div id="blocklyDiv">    
            </div>
          </div>
          <div className="code-wrapper">
            <div className="code-wrapper-header">
                <FontAwesomeIcon icon="code" />
                code
            </div>
            <pre className="code-area">
              <code id="code" class="javascript" ></code>
            </pre>
          </div>
          <ToolBox></ToolBox>
        </div>
      </div>
    )
  }
}

export default Main;