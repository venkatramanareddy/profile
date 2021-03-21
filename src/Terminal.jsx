import React from 'react';
import './terminal.css';

const defaultErrorResponse = "Looks like your trying something which I cannot answer, try asking for help";
let uniqueRowId = 0;    

function getUniqueRowId(){
    uniqueRowId++;
    return uniqueRowId;
}

class Terminal extends React.Component{

    constructor(props){
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
        let initialPromptData = [];
        let initialStyle = {};
        
        this.state = {
            rowData: initialPromptData,
            promptItemList: initialPromptData.map((element) => this.createRowElement(element)),
            customStyle: initialStyle
        }
    }

    onKeyDown(event){
        if(event.key === 'Enter'){
            // Process the command 
            if(event.target.value == null || event.target.value === ""){
                return;
            }
            if(event.target.value === "clear" || event.target.value === "cls"){
                this.setState({
                    rowData: [],
                    promptItemList: []
                });
            }
            else{
                // check if we have corresponding command
                let rowData = this.getCorrespondingCommandOutput(event.target.value);
                if(rowData != null){
                    this.updatePrompt(rowData);
                }
            }
            event.preventDefault();

            // cleanup input box
            event.target.value = "";
        }
        if(event.key === 'Tab'){
            //autocomplete logic
            if(event.target.value == null || event.target.value === ""){
                return;
            }
            event.preventDefault();
            let matchingCommand = this.getClosestMatchingCommandName(event.target.value);
            if( matchingCommand != null ){
                event.target.value = matchingCommand;
            }
        }
    }

    getClosestMatchingCommandName(partialInput){
        let resp = partialInput;
        if(this.props.responseList.commandList != null 
            && this.props.responseList.commandList.length >= 0){
                let commandItem = this.props.responseList.commandList.find(o=> o.command.startsWith(partialInput));
                if(commandItem != null){
                    resp = commandItem.command
                }
        }
        return resp;
    }

    getCorrespondingCommandOutput(inputCommand){
        let rowData = {id: getUniqueRowId()}
        if(this.props.responseList.commandList != null 
            && this.props.responseList.commandList.length >= 0){
            let matchingResult = this.props.responseList.commandList.find(o=> o.command === inputCommand)
            if(matchingResult != null){
                Object.assign(rowData,{        
                    type: "generalResponse",
                    data: matchingResult.response
                });
                return rowData;
            }
        }

        if(this.props.responseList.colorPallete != null 
            && this.props.responseList.colorPallete.length >= 0){
            let matchingResult = this.props.responseList.colorPallete.find(o=> o === inputCommand);
            if(matchingResult != null){
                // raise color change event
                this.onThemeChange(matchingResult);
                Object.assign(rowData,{        
                    type: "generalResponse",
                    data: "You've found an easter egg! Theme changed successfully!"
                });
                return rowData;
            }
        }
        
        if(this.props.responseList.hasOwnProperty('error')){
            Object.assign(rowData, {        
                type: "errorResponse",
                data: this.props.responseList['error'],
            });
        }
        else{
            Object.assign(rowData, {        
                type: "errorResponse",
                data: defaultErrorResponse,
            });
        }
        return rowData;
    }

    onThemeChange(colorData){
        let initialStyle = {
            "backgroundColor": "black",
            "color": colorData
        };
        this.setState({
            customStyle: initialStyle
        })
    }

    updatePrompt(rowData){
        let updatedList = this.state.rowData;
        updatedList.push(rowData);
        let updatedPromptItemList = this.state.promptItemList;
        updatedPromptItemList.push(this.createRowElement(rowData));
        this.setState({
            rowData: updatedList,
            promptItemList: updatedPromptItemList
        });
    }
    componentDidMount() {
        let initialPromptData = [];
        if (this.props.responseList.disclaimer !=null){
            initialPromptData.push({
                type: "disclaimer",
                data: this.props.responseList.disclaimer
            });
        }
        let initialStyle = {
            "backgroundColor": "black",
            "color": "green"
        };
        if(this.props.responseList.defaultColor != null){
            initialStyle.color = this.props.responseList.defaultColor;
        }

        this.setState({
            rowData: initialPromptData,
            promptItemList: initialPromptData.map((element) => this.createRowElement(element)),
            customStyle: initialStyle
        });

        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        if(this.el != null){
            this.el.scrollIntoView({ behaviour : 'smooth'});
        }
    }
    createRowElement(element){
        // I know index is not right for using key, but in my case I can live with it
        if(element.type === "generalResponse" || element.type === "errorResponse"){
            return <div key={element.id}
                    ref={el=> {this.el = el;}} 
                    className="tr tr-general">
                    <div className="terminalCursor"> {'>>'} </div>
                    <div>
                       {element.data} 
                    </div>
            </div>
        }
        else if(element.type === "disclaimer"){
            return <div key={element.id} className="tr tr-disclaimer">{element.data}</div>
        }
    }

    render(){
        return(
            <div className="terminal" style={this.state.customStyle}>
                <div className="terminalOutputArea"  style={this.state.customStyle}>
                    {this.state.promptItemList}
                </div>
                <div className="terminalInputArea"  style={this.state.customStyle}>
                    <div className="terminalCursor"  style={this.state.customStyle}> {'>>'} </div>
                    <input className="terminalInputBox" onSubmit={this.onKeyDown}
                    onKeyDown={this.onKeyDown} style={this.state.customStyle} autoFocus/>
                </div>
            </div>
        )
    }
}

export default Terminal;