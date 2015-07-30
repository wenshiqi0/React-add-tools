/**
 * Created by Winsky on 15/7/30.
 */



var data = [
    'wen',
    'test',
    'lai',
    'rui'
]

var SearchBar = React.createClass({
    render:function(){
        var bar={
            width:'20%'
        }

        return (
            <div>
                <input style={bar} onBlur={this.props.lostFocus} onChange={this.handleChange} />
                <input type="button" value="search" />
            </div>
        )
    },
    handleChange:function(e){
        if(e.target.value == ''){
            this.props.getFocus(false);
        }else{
            this.props.getFocus(true);
        }
    }
})

var SearchTips = React.createClass({
    render:function(){
        var enable = {
            border:'1px solid #000',
            width:'20%',
            display:'block'
        }
        var disable = {
            display:'none'
        }
        return (
            <div style={this.props.appear?enable:disable} onMouseDown={this.selectRow} onMouseOut={this.props.handleMouseOut}>
                {this.props.data}
            </div>
        )
    },
    selectRow:function(){
        alert('Got it');
    },
})

var Search = React.createClass({
    render:function(){
        return (
            <div>
                <SearchBar lostFocus={this.lostFocus} getFocus={this.getFocus} />
                <SearchTips data={this.props.data} appear={this.state.appear} handleMouseOut={this.handleMouseOut} />
            </div>
        )
    },
    getInitialState:function(){
        return {
            appear:false
        }
    },
    lostFocus:function(){
        this.setState({appear:false});
    },
    getFocus:function(haveWord){
        this.setState({appear:haveWord});
    },
    handleMouseOut:function(){
        this.setState({appear:false});
    }
})


React.render(
    <Search data={data} />,
    document.getElementById('main')
)