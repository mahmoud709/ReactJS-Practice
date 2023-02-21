import Card from "react-bootstrap/Card";

function TeamMember(props) {
    return (
    
      <Card className="col-12 col-sm-6 col-md-4 col-lg-3 m-2 ">
        <Card.Img src={props.image} height="338"/>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
            </Card>
    );
}

export default TeamMember;
