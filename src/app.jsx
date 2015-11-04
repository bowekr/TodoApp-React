var React = require('react');
var Input = require('./input');
var List = require('./list');

var App = React.createClass({
  getInitialState: function(){
    return{ items: [] }
  },

  updateItem: function(newItem){
    this.setState({items: this.state.items.concat([newItem])});
    console.log(this.state.items);
  },

  render: function() {
    return <div className="row col-md-8 col-md-push-2">
      <h1 className="text-center"> To-do Lists </h1>
      <Input item={this.updateItem} />
      <br />
      <List items={this.state.items} />
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
