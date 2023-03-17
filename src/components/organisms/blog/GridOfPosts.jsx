import {Grid} from "@mui/material";

import PostCard from "../../molecules/blog/PostCard";
import CustomButton from "../../atoms/CustomButton";

import * as S from './GridOfPosts.style';

function GridOfPosts(props) {

  const buildPosts = () => {
    if (props.posts === undefined) {
      return (<></>);
    } else {
      return props.posts.map((post) => (
          <Grid item xs={4}>
            <PostCard date={post.date}
                      title={post.title}
                      description={post.description}
                      imgSrc={post.imgSrc}/>
          </Grid>
      ));
    }
  }

  return (
      <S.GridOfPosts>
        <Grid container spacing={3}>
          {buildPosts()}
        </Grid>
        <CustomButton>Load More</CustomButton>
      </S.GridOfPosts>
  );
}

export default GridOfPosts;
