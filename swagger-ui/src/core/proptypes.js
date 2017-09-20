import PropTypes from "prop-types"

// Takes a list and proptype, and returns a PropType.shape({ [item]: propType })
const mapListToPropTypeShape = (list, propType) => PropTypes.shape(
  list.reduce((shape, propName) => {
    shape[propName] = propType
    return shape
}, {}))


export const arrayOrString = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
])

export const objectWithFuncs = list => mapListToPropTypeShape(list, PropTypes.func.isRequired)



if (!String.prototype.endsWith)
  String.prototype.endsWith = function(searchStr, Position) {
      // This works much better than >= because
      // it compensates for NaN:
      if (!(Position < this.length))
        Position = this.length;
      else
        Position |= 0; // round position
      return this.substr(Position - searchStr.length, searchStr.length) === searchStr;
  };