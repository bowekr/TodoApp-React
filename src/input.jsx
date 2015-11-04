var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return{ text: '' }
  },

  render: function(){
    return <div className="input-group">
      <input onChange={this.handleChanges} value={this.state.text} type="text" placeholder="Enter Here" className="form-control"/>
      <span className="input-group-btn">
        <button onClick={this.handleClick} type="button" className="btn btn-primary">
          Add
        </button>
      </span>
    </div>
  },

  handleClick: function(){
    this.props.item(this.state.text);
  },

  handleChanges: function(event){
    this.setState({text: event.target.value})
  }
});