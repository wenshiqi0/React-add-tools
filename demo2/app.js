/**
 * Created by Administrator on 2015/7/31.
 */
var Showcase = React.createClass({
    render:function(){
        var imgStyle = {
            position:'relative',
            zIndex : '1'
        }
        var imgWidth = {
            width:'600px',
            height:'360px',
        }
        var leftStyle = {
            position:'relative',
            top:'-220px',
            left:'20px',
            zIndex:'3',
        }
        var rightStyle = {
            position:'relative',
            top:'-220px',
            left:'500px',
            zIndex:'3',

        }
        var overStyle={
            opacity:'1.0'
        }
        var leaveStyle={
            opacity:'0.3'
        }
        return (
            <div style={{position:'relative'}}>
                <img src={this.props.src} style={merge(imgWidth,imgStyle)} />
                <img id='arrow_left' src={this.props.left} style={merge(leftStyle,this.state.onLeft?overStyle:leaveStyle)} onClick={this.handleClick} onMouseOver={this.handleMouseOverLeft} onMouseLeave={this.handleMouseLeaveLeft} />
                <img id='arrow_right' src={this.props.right} style={merge(rightStyle,this.state.onRight?overStyle:leaveStyle)} onClick={this.handleClick} onMouseOver={this.handleMouseOverRight} onMouseLeave={this.handleMouseLeaveRight} />
            </div>
        )
    },
    handleClick:function(e){
        var reId = /^[a-zA-Z\/]+(\d)+\.[a-zA-Z]*$/i;
        var src = this.props.src;
        var res = reId.exec(src);
        var idInt = parseInt(res[1]);
        if(e.target.id == 'arrow_left'){
            if(--idInt == (parseInt(this.props.minId)-1)){
                idInt = 3;
            }
        }else{
            if(++idInt == (parseInt(this.props.maxId)+1)){
                idInt = 1;
            }
        }
        this.props.handleClick(this.props.imgRoot+idInt+this.props.imgPostfix);
    },
    handleMouseOverLeft:function(e){
        this.setState({onLeft:true});
    },
    handleMouseLeaveLeft:function(e){
        this.setState({onLeft:false});
    },
    handleMouseOverRight:function(e){
        this.setState({onRight:true});
    },
    handleMouseLeaveRight:function(e){
        this.setState({onRight:false});
    },
    getInitialState:function(){
        return {
            onLeft:false,
            onRight:false
        }
    }
})

var ScrollImg = React.createClass({
    render:function(){
        var imgStyle = {
            opacity:'0.6',
            width: this.props.width,
            height: this.props.height,
        }
        var imgOnMouse = {
            opacity:'1.0',
            width: this.props.width,
            height: this.props.height,
        }
        var imgs = [];
        for(var i=1;i<4;i++){
            if(this.state.mouseOnWhich == 0){
                imgs.push(<img id={this.props.idPrefix+i} src={this.props.imgRoot+i+this.props.imgPostfix} style={imgStyle} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}/>)
            }else {
                if(this.state.mouseOnWhich == i){
                    imgs.push(<img id={this.props.idPrefix+i} src={this.props.imgRoot+i+this.props.imgPostfix} style={imgOnMouse} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}/>)
                }else{
                    imgs.push(<img id={this.props.idPrefix+i} src={this.props.imgRoot+i+this.props.imgPostfix} style={imgStyle} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}/>)
                }
            }
        }
        return (
            <div style={{position:'relative',background:'rgba(32,32,32,0.5)',top:'-165px',zIndex : '2',width:'600px',height:'120px'}}>
                <div style={{position:'relative',textAlign:'center',top:'10px'}}>
                    {imgs}
                </div>
            </div>
        )
    },
    handleClick:function(e){
        var reId = /^[a-zA-Z]+\-+(\d)$/i;
        var res = reId.exec(e.target.id);
        var src = 'src/'+res[1]+'.jpg';
        this.props.handleClick(src);
    },
    handleMouseOver:function(e){
        var reId = /^[a-zA-Z]+\-+(\d)$/i;
        var res = reId.exec(e.target.id);
        this.setState({mouseOnWhich:parseInt(res[1])})
    },
    handleMouseLeave:function(e){
        this.setState({mouseOnWhich:0});
    },
    getInitialState:function(){
        return {
            mouseOnWhich:0
        }
    }
})

var ScrollShowcase = React.createClass({

    render:function(){
        var size={
            height:'360px',
            width:'600px'
        }

        return (
            <div style={size}>
                <Showcase src={this.state.mainCase} handleClick={this.handleClickImg} left='src/arrow-left.gif' right='src/arrow-right.gif' imgRoot='src/' imgPostfix='.jpg' minId='1' maxId='3' />
                <ScrollImg idPrefix = 'img-' handleClick={this.handleClickImg} width='160px' height='100px' imgRoot='src/' imgPostfix='.jpg' />
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