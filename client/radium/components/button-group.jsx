// React
var React = require("react/addons");

// Mixins
var RadiumBrowserState = require("../mixins/radium-browser-state");

// Component
var ButtonGroup = React.createClass({
  mixins: [RadiumBrowserState],

  buildChildren: function (items) {
    return React.Children.map(items, function (item, index) {
      var newProps = {
        key: index
      };

      if (index > 0) {
        newProps.buttonGroupSibling = true;
      }

      if (index === 0) {
        newProps.buttonGroupLocation = "first";
      } else if (index === items.length - 1) {
        newProps.buttonGroupLocation = "last";
      } else {
        newProps.buttonGroupLocation = "middle";
      }

      return React.addons.cloneWithProps(item, newProps);
    });
  },

  render: function () {
    return (
      <div>
        {this.buildChildren(this.props.children)}
      </div>
    );
  }
});

module.exports = ButtonGroup;
