import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from "material-ui/Card/index";
import {Avatar, RaisedButton, SvgIcon} from "material-ui";
import {blue300, brown50, indigo900, orange200} from "material-ui/styles/colors";


const style = {margin: 5};

class ProductInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expended: false,
    }
  }

  ringing = () => {
    console.log("ringing");
  };

  handleExpandChange = (expanded) => {
    // console.log("expended=", expanded);
    this.setState({expanded: expanded});
  };

  render() {
    console.log("ProductInstance.js/", "props.item=", this.props.item);
    const title = "Android";
    const subTitle = this.props.item.uuid;

    return (
      <div>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}>
          <CardHeader
            actAsExpander={true}
            showExpandableButton={true}
            title={title}
            subtitle={subTitle}
            avatar={
              <Avatar
                icon={<SvgIcon
                  color={orange200}
                  hoverColor={brown50}>
                  <path
                    d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z"/>
                </SvgIcon>
                }
                color={blue300}
                backgroundColor={indigo900}
                size={30}
                style={style}/>
            }
          />
          <CardText expandable={true}>
            <RaisedButton label="Ringing" onClick={this.ringing}/>
          </CardText>
        </Card>
      </div>
    );
  };
}

ProductInstance.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductInstance;
