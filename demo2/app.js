/**
 * Created by Administrator on 2015/7/31.
 */
var Showcase = React.createClass({
    render:function(){
        var style = {
            position:'relative',
            top : '0px',
            left: '0px',
            zIndex : '1'
        }

        var imgWidth = {
            width:'600px',
            height:'360px',
        }

        return (
            <div style={style}>
                <img src={this.props.src} style={imgWidth} />
            </div>
        )
    }
})

var ScrollImg = React.createClass({
    render:function(){
        var imgSize = {
            width: '160px',
            height: '100px'
        }
        return (
            <div style={{position:'relative',background:'rgba(32,32,32,0.7)',top:'-120px',zIndex : '2',width:'600px',height:'120px'}}>
                <div style={{position:'relative',textAlign:'center',top:'10px'}}>
                    <img src='src/1.jpg' style={imgSize} onClick={this.handleClick1}/>
                    <img src='src/2.jpg' style={imgSize} onClick={this.handleClick2}/>
                    <img src='src/3.jpg' style={imgSize} onClick={this.handleClick3}/>
                </div>
            </div>
        )
    },
    handleClick1:function(){
        this.props.handleClick('src/1.jpg');
    },
    handleClick2:function(){
        this.props.handleClick('src/2.jpg');
    },
    handleClick3:function(){
        this.props.handleClick('src/3.jpg');
    },
})



var ScrollShowcase = React.createClass({
    render:function(){
        return (
            <div>
                <Showcase src={this.state.mainCase} />
                <ScrollImg handleClick={this.handleClickImg} />
            </div>
        )
    },
    getInitialState:function(){
        return {
            mainCase:'src/1.jpg'
        }
    },
    handleClickImg:function(s){
        this.setState({mainCase:s});
    }
})

React.render(
    <ScrollShowcase />,
    document.getElementById('main')
)