/**
 * Created by Administrator on 2015/7/28.
 */

var data=[
    1,2,3,4,5,6,7,8,9,0
]

var ScrollView = React.createClass({
    render:function(){
        var items = this.state.items;
        items.push(<MoreItemsBar handleClick={this.handleMoreItems} />);
        return(
            <div className='scrollView'>
                <div>{items}</div>
            </div>
        )
    },
    handleMoreItems:function(){
        var items = this.state.items;
        items.pop();
        for(var i in data){
            items.push(<ScrollItem value={i} />);
        }
        this.setState({items:items});
    },
    getInitialState:function(){
        return{
            items:[]
        }
    }
})

var ScrollItem = React.createClass({
    render:function(){
        return(
            <div className='scrollItem'>
                <img src='image/a.jpg' />
                <span>{this.props.value}</span>
            </div>
        )
    }
})

var MoreItemsBar = React.createClass({
    render:function(){
        return(
            <div className="moreItemsBar" onClick={this.props.handleClick}>
                <h5>Load More Please</h5>
            </div>
        )
    }
})

React.render(
    <ScrollView />,
    document.getElementById('main')
)
