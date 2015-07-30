/**
 * Created by Administrator on 2015/7/28.
 */

var test = [
    {url:'www.baidu.com',key:'wen'},
    {url:'github.com',key:'wen'},
    {url:'#',key:'wen'}
];

var Tips = React.createClass({
    render:function(){
        var style = {
            tipsWidth:{
                width:'20%'
            },
            tipsBorder:{
                border:'1px solid #000'
            },
        }
        var list = [];
        test.forEach(function(i){
            list.push(<a href={i.url} ><option>{i.key}</option></a>);
        })
        return (
            <div id='tips'style={merge(style.tipsBorder,style.tipsWidth,this.props.style)}>
                {list}
            </div>
        )
    }
})

var SearchBar = React.createClass({
    render:function(){
        var style = {
            enInput:{
                display:'block'
            },
            disInput:{
                display:'none'
            },
            InputWidth:{
                width:'20%'
            },
        }
        return (
            <div id='searchBar'onBlur={this.lostFocus}>
                <input id="searchInput" onChange={this.handleChange} style={style.InputWidth} />
                <input type='button' id='search' value='Search' />
                <Tips style={this.state.disInput?style.disInput:style.enInput} />
            </div>
        )
    },
    getInitialState:function(){
        return {
            test:test,
            disInput:true
        }
    },
    handleChange:function(event){
        if(event.target.value == ''){
            this.setState({disInput:true});
        }else{
            this.setState({disInput:false});
        }
        event.stopPropagation();
    },
    lostFocus:function() {
        this.setState({disInput:true});
    }
})
React.render(
    <SearchBar />,
    document.getElementById('searchBar')
);