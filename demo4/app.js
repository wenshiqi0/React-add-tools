/**
 * Created by Winsky on 2015/8/4.
 */

var SwitchButton = React.createClass({
    render:function(){
        return(
            <img style={this.props.style} className="switchButton" src={this.props.img} />
        )
    }
})


var SwitchImgCase = React.createClass({
    render:function(){
        var imgs = [];
        for(var i=0;i<6;i++){
            var top=parseInt(i/3)*100;
            var left=parseInt(i%3)*100;
            imgs.push(<SwitchButton style={{top:top+'px',left:left+'px'}} img={ this.props.prefix+i+this.props.postfix } />)
        }
        return (
            <div className="switchImgCase">
                <div className="switchTable">
                    {imgs}
                </div>
            </div>
        )
    }
})

React.render(
    <SwitchImgCase prefix="./../image/r" postfix=".png" />,
    document.getElementById('main')
)