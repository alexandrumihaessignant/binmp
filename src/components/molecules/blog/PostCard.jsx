import {Card, CardHeader, CardMedia} from "@mui/material";

function PostCard(props) {
  return (
      <Card xs={{ minWidth: 275 }}>
        <CardHeader
            title={props.title}
            subheader={props.date}
        />
        <CardMedia
            component="img"
            height="194"
            image={props.imgSrc}
            alt={props.title + " image"}
        />
      </Card>
  );
}

export default PostCard;
