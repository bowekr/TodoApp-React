var React = require('react');

module.exports = React.createClass({
  render: function(){
    var items = this.props.items.map(function(item, key){
      return(
        <li key={key} className="list-group-item">{item}</li>
      );
    });
    return <ul className="list-group">
      {items}
    </ul>
  },
});