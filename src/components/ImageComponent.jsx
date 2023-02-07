import React from "react"

class Immagine extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.link}
          alt={this.props.spiegazione}
          style={{ height: this.props.grandezza + "px" }}
        />
      </div>
    )
  }
}

export default Immagine
